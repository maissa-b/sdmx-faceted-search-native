import { map, compose, toLower, prop, sortBy, init, join, reduce, addIndex, last } from 'ramda';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem } from 'react-native-elements';
import { styles } from './styleSheet';

const reduceIndexed = addIndex(reduce);

const TreeView = ({ nodes, onNodeCollapse, onNodeExpand, onNodeClick }) => (
  <View>
    {map(node =>
      <View onClick={onNodeClick} key={node.id} style={styles.categoryLabel}>
        <View style={styles.labelIconContainer}>
          <Icon name="chevron-right" size={10} color="rgb(118, 134, 148)" />
          <Icon name={node.iconName} size={10} color="rgb(79, 119, 255)" />
        </View>
        <Text style={styles.labelText}>{node.label} {node.secondaryLabel}</Text>
      </View>
    , nodes)}
  </View>
);

const CatTreeNode = (id, label, defaultValue) => ({
  id,
  label,
  childNodes: [],
  isSelected: defaultValue === id,
  hasChildNodes() { return this.childNodes.length; },
  get hasCaret() { return this.hasChildNodes(); },
  get iconName() { return this.hasChildNodes() ? 'folder' : 'pt-icon-tag icon'; },
  get secondaryLabel() { return `(${this.count})`; },

  spreadExpanded() {
    this.isExpanded = true;
    const parent = this.parent;
    if (parent) parent.spreadExpanded();
  },

  spreadBottomUp(cb) {
    cb(this);
    if (this.parent) this.parent.spreadBottomUp(cb);
  },

  setCount(count) {
    this.count = count;
    // if (count) this.spreadBottomUp(node => node.totalCount = (node.totalCount || 0) + count); //eslint-disable-line
  },

  addChild(child) {
    this.childNodes.push(child);
    child.parent = this; //eslint-disable-line
    if (child.isSelected) this.spreadBottomUp(node => node.isExpanded = true); //eslint-disable-line
    return child;
  },
});

const CatTree = (domain, value) => {
  const nodes = {};
  const roots = [];
  const getNode = id => nodes[id];
  const makeNode = (id, label) => new CatTreeNode(id, label, value);
  const addNode = (parent, { id, level, label }) => {
    let node = getNode(id);
    if (node) return node;
    node = makeNode(id, label);
    nodes[id] = node;
    if (level === 0) roots.push(node);
    else parent.addChild(node);
    return node;
  };
  const makePath = (lastPath = {}, label, idx) => {
    const path = join('/', [lastPath.path, label]);
    return {
      id: `${idx}${path}/`,
      path,
      level: idx,
      label,
    };
  };
  const getPath = val => {
    const [level, ...names] = init(val.split('/')); // eslint-disable-line no-unused-vars
    return reduceIndexed((acc, name, idx) => [...acc, makePath(last(acc), name, idx)], [], names);
  };
  const setCount = (id, count) => {
    const node = getNode(id);
    if (!node) return;
    node.setCount(count);
  };
  const sortByLabel = sortBy(compose(toLower, prop('label')));
  const sort = nodes => { //eslint-disable-line
    if (!nodes) return;
    const newNodes = sortByLabel(nodes);
    for(const node of newNodes) { //eslint-disable-line
      node.childNodes = sort(node.childNodes);
    }
    return newNodes;
  };
  const getUINodes = () => sort(roots);
  const buildTree = () => {
    domain.forEach(({ val, count }) => {
      const cats = getPath(val);
      let parent;
      cats.forEach(cat => {
        parent = addNode(parent, cat);
      });
      setCount(val, count);
    });
  };
  buildTree();
  return { getUINodes };
};

class TreeFacet extends Component {
  handleNodeCollapse = nodeData => {
    nodeData.isExpanded = false;
    this.forceUpdate();
  };

  handleNodeExpand = nodeData => {
    nodeData.isExpanded = true;
    this.forceUpdate();
  };

  handleNodeClick = nodeData => {
    const { nodes } = this.state;
    const { onClick } = this.props;
    if (nodeData.isSelected) {
      nodeData.isSelected = false;
      return onClick && onClick([]);
    }
    this.forEachNode(n => n.isSelected = false, nodes);
    nodeData.isSelected = true;
    // this.forceUpdate();
    onClick && onClick([nodeData.id]);
  }

  forEachNode = (cb, nodes) => {
    if (!nodes) return
    for (const node of nodes) {
      cb(node);
      this.forEachNode(cb, node.childNodes);
    }
  };

  componentWillMount() {
    const { domain, value } = this.props;
    const nodes = CatTree(domain, value).getUINodes();
    this.setState({ nodes });
  }

  componentWillReceiveProps(nextProps) {
    const { domain, value } = nextProps;
    const nodes = CatTree(domain, value).getUINodes();
    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;
    return (
      <TreeView
        nodes={nodes}
        onNodeCollapse={this.handleNodeCollapse}
        onNodeExpand={this.handleNodeExpand}
        onNodeClick={this.handleNodeClick}
      />
    );
  }
};

TreeFacet.propTypes = {
  domain: PropTypes.array.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

const Category = ({ name, domain, value, onClick }) => (
  <View style={styles.facets}>
    <View style={styles.facetHeader}>
      <Icon name="bars" size={10} color="rgb(79, 119, 255)" />
      <Text style={styles.name}>{name}</Text>
    </View>
    {domain.length === 0 && <View style={styles.emptyIconContainer}><Icon name="ellipsis-h" size={10} color="rgb(79, 119, 255)" /></View>}
    <TreeFacet domain={domain} value={value && value[0]} onClick={onClick} />
  </View>
);

Category.propTypes = {
  domain: PropTypes.array.isRequired,
  value: PropTypes.array,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Category;

