import React from 'react';
import PropTypes from 'prop-types';
import { map, remove, indexOf } from 'ramda';
import { View, Text, Image } from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles, checkBoxTextStyle } from './styleSheet';
import notChecked from '../../imgs/notChecked.png';
import checked from '../../imgs/checked.png';

const isChecked = (value, name) => value.includes(name);

const Dimension = ({ buckets, name, onClick, value}) => (
  <View style={styles.facets}>
    <View style={styles.facetHeader}>
      <Icon name="filter" size={10} color="rgb(79, 119, 255)" />
      <Text style={styles.name}>{name}</Text>
    </View>
    {map(bucket =>
      <CheckBox
        key={bucket.val}
        style={styles.checkBox}
        rightTextStyle={checkBoxTextStyle}
        onClick={() => isChecked(value, bucket.val) ? onClick(remove(indexOf(bucket.val, value), 1, value)) : onClick([...value, bucket.val])}
        isChecked={isChecked(value, bucket.val)}
        rightText={bucket.val}
        checkedImage={<Image source={checked} style={styles.icon}/>}
        unCheckedImage={<Image source={notChecked} style={styles.icon}/>}
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