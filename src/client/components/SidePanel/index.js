import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styleSheet';
import Facets from '../Facets';

const SidePanel = ({ facets, search}) => {
  if (facets.length === 0)
    return <View />
  return (
    <ScrollView>
      <View style={styles.sidePanel}>
        <Facets facets={facets} search={search}/>
      </View>
    </ScrollView>
  )
};

SidePanel.propTypes = {
  facets: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
}

export default SidePanel;