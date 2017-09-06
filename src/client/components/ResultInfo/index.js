import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { Icon } from 'react-native-elements';
import { styles } from './styleSheet';

const ResultInfo = ({ numFound = 0, searchValue }) => (
  <View style={styles.resultInfoContainer}>
    <Icon
      name='page-search'
      size={14}
      iconStyle={styles.searchInfoIcon}
      type='foundation'
      color='rgb(79, 119, 255)'
    />
    <Text style={styles.resultInfoText}>{numFound} Dataflows found for {searchValue}</Text>
  </View>
);

ResultInfo.propTypes = {
  numFound: PropTypes.number,
  searchValue: PropTypes.string.isRequired,
}

const enhance = onlyUpdateForKeys(['numFound', 'searchValue']);

export default enhance(ResultInfo);