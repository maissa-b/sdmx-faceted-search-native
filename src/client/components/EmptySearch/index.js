import React from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements'

import { styles } from './stylesheet';

const EmptySearch = () => (
  <View style={styles.empty_search}>
    <Text style={styles.empty_search_header}> Search Tips</Text>
    <View style={styles.empty_search_container}>
      <Text>Check that the spelling of keywords is correct</Text>
      <Text>Use different keywords</Text>
      <Text>Remove filters to broaden your search</Text>
    </View>
  </View>
);

export default EmptySearch;
