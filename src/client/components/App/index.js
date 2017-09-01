import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import { styles } from './stylesheet';

const App = ({ dataflows }) => (
  <View style={styles.app}>
    <ScrollView>
      {dataflows.map((dataflow, index) => <Text key={index}>{dataflow.name[0]}</Text>)}
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