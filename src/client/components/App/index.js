import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../../actions/dataflows';
import { getFacets } from '../../selectors';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import SidePanel from '../SidePanel';
import { styles } from './stylesheet';

const App = ({ dataflows, facets, search: doSearch }) => (
  <SideMenu edgeHitWidth={300} menu={<SidePanel facets={facets} search={doSearch}/>}>
    <View style={styles.app}>
      <ScrollView>
        {dataflows.map((dataflow, index) => <Text key={index}>{dataflow.name[0]}</Text>)}
      </ScrollView>
    </View>
  </SideMenu>
);

const actions = { search };

const mapStateToProps = state => ({
  dataflows: state.dataflows,
  facets: getFacets(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

App.propTypes = {
  dataflows: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);