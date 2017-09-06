import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './stylesheet';

const Detail = ({ navigation: { state: { params: { dataflow } } } }) => (
  <View style={styles.detail}>
    <ScrollView style={styles.detailScrollView}>
      <View style={styles.detailtitleContainer}> 
        <Text style={styles.detail_title}>{`${dataflow.name[0]}`}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detail_content}>
          <Text style={styles.detail_key}>id: </Text>
          <Text style={styles.detail_value}>{dataflow.id}</Text>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_key}>agency: </Text>
          <Text style={styles.detail_value}>{dataflow.agency}</Text>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_key}>version: </Text>
          <Text style={styles.detail_value}>{dataflow.version}</Text>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_key}>description: </Text>
          <Text style={styles.detail_value}>{dataflow.description[0]}</Text>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_key}>frequency: </Text>
          {dataflow && dataflow.frequency && dataflow.frequency.map((item, index) =>
            <Text style={styles.detail_value} key={index}>{item}</Text>)
          }
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_key}>reference area: </Text>
          {dataflow && dataflow.reference_area && dataflow.reference_area.map((item, index) =>
            <Text style={styles.detail_value} key={index}>{item}</Text>)
          }
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_key}>intereset_rate_type: </Text>
          {dataflow && dataflow.interest_rate_type && dataflow.interest_rate_type.map((item, index) =>
            <Text style={styles.detail_value} key={index}>{item}</Text>)
          }
        </View>
      </View>
    </ScrollView>
  </View>
);

export default Detail;