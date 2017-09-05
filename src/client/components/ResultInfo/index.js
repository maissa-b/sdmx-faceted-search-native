import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { styles } from './styleSheet';

const ResultInfo = ({ searchInfo }) => (
  <View style={styles.resultInfoContainer}>
    <Icon
      name='page-search'
      size={14}
      iconStyle={styles.searchInfoIcon}
      type='foundation'
      color='rgb(79, 119, 255)'
    />
    {searchInfo.numFound && <Text style={styles.resultInfoText}>{searchInfo.numFound} Dataflows found</Text>}
  </View>
);

ResultInfo.propTypes = {
  searchInfo: PropTypes.object,
}

export default ResultInfo;