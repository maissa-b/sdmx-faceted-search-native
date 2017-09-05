import React from 'react';
import PropTypes from 'prop-types';
import { map, remove, indexOf } from 'ramda';
import { View, Text, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles, checkBoxTextStyle } from './styleSheet';

const isChecked = (value, name) => value.includes(name);

const Dimension = ({ buckets, name, onClick, value}) => (
  <View style={styles.facetsDimension}>
    <View style={styles.facetHeader}>
      <Icon name="filter" size={10} color="rgb(79, 119, 255)" />
      <Text style={styles.name}>{name}</Text>
    </View>
      {buckets.length === 0 && <View style={styles.emptyIconContainer}><Icon name="ellipsis-h" size={10} color="rgb(79, 119, 255)" /></View>}
      {map(bucket =>
        <CheckBox
          key={bucket.val}
          title={bucket.val}
          size={15}
          containerStyle={styles.dimensionLabel}
          checkedColor='rgb(79, 119, 255)'
          uncheckedColor='rgb(75, 75, 75)'
          checkedIcon='check-square'
          uncheckedIcon='square-o'
          textStyle={styles.labelText}
          checked={isChecked(value, bucket.val)}
          onPress={() => isChecked(value, bucket.val) ? onClick(remove(indexOf(bucket.val, value), 1, value)) : onClick([...value, bucket.val])}
        />
      , buckets)}
  </View>
);

Dimension.propTypes = {
  buckets: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.array,
}

Dimension.defaultProps = {
  value: [],
};

export default Dimension;