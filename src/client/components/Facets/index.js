import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { compose, filter, map } from 'ramda';
import { CATEGORY, DIMENSION } from '../../dataflows';
import styles from './styleSheet';

const getFacetComponent =  search => ({ type, buckets, name, value }) => {
   return (
      <View style={styles.facets}>
        <Text style={styles.name}>{name}</Text>
      </View>
    )
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