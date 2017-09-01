import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

import { styles } from './stylesheet';

const App = ({ dataflows, navigation: { navigate } }) => (
  <View>
    <ScrollView>
      <Card containerStyle={{padding: 0}}>
        {dataflows.map(dataflow =>
          <ListItem onPress={() => navigate('Detail', { dataflow })} key={dataflow.id} title={dataflow.name[0]} subtitle={dataflow.description[0]} />)}
      </Card>
    </ScrollView>
  </View>
);

const mapStateToProps = state => ({
  dataflows: state.dataflows,
});

App.propTypes = {
  dataflows: PropTypes.array.isRequired,
  navigation: PropTypes.object,
};

export default connect(mapStateToProps)(App);