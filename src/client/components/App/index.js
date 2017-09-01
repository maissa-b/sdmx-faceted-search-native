import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

import { styles } from './stylesheet';

const App = ({ dataflows }) => (
  <View>
    <ScrollView>
      <Card containerStyle={{padding: 0}}>
        {dataflows.map(dataflow => <ListItem key={dataflow.id} title={dataflow.name[0]} subtitle={dataflow.description[0]} />)}
      </Card>
    </ScrollView>
  </View>
);

const mapStateToProps = state => ({
  dataflows: state.dataflows,
});

App.propTypes = {
  dataflows: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);