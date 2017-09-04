import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { compose, filter, map } from 'ramda';
import { CATEGORY, DIMENSION } from '../../dataflows';
import Category from './category';
import Dimension from './dimension';
import { styles } from './styleSheet';

const getFacetComponent =  search => ({ type, buckets, name, value }) => {
  const handleClick = facetName => facetValue => search({ facets: { [facetName]: facetValue } });
   switch (type) {
    case CATEGORY:
      return <Category key={name} domain={buckets} name={name} onClick={handleClick(name)} value={value}/>
    case DIMENSION:
      return <Dimension key={name} buckets={buckets} name={name} onClick={handleClick(name)} value={value}/>
    default:
      return (<View key={name} style={styles.facets}>
        <Text style={styles.name}>{name}</Text>
      </View>);
  }
};

const Facets = ({ facets, search }) => {
  const facetBoxes = compose(filter(x => x), map(getFacetComponent(search)))(facets);
  return (
    <View>{facetBoxes}</View>
  );
};

Facets.propTypes = {
  facets: PropTypes.array.isRequired,
  search: PropTypes.func,
};

export default Facets;