import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './stylesheet';

const EmptySearch = () => (
  <View style={styles.empty_search}>
    <Text style={styles.empty_search_header}> Search Tips</Text>
    <View style={styles.empty_search_container}>
      <Text style={styles.empty_search_info}>Check that the spelling of keywords is correct</Text>
      <Text style={styles.empty_search_info}>Use different keywords</Text>
      <Text style={styles.empty_search_info}>Remove filters to broaden your search</Text>
    </View>
  </View>
);

export default EmptySearch;
