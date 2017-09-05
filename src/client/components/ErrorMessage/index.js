import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';

import { styles } from './stylesheet';

export const ErrorMessage = ({ message: { header, label }, navigate }) => (
  <View style={styles.error_message}>
    {Alert.alert(header, label)}
    <Button
      backgroundColor="rgb(79, 119, 255)"
      title="Reload"
      icon={{name: 'cached'}}
      onPress={() => navigate('Home') }
    />
  </View>
);

ErrorMessage.propTypes = {
  message: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default ErrorMessage;
