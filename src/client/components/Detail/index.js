import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './stylesheet';

const Detail = ({ navigation: { state: { params } } }) => (
  <View>
    <Text>Dataflow name : </Text>
    <Text>{params.dataflow.name[0]}</Text>
  </View>
);

export default Detail;