import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Toast from 'react-native-root-toast';

import { styles } from './stylesheet';

class Alert extends React.Component {
  componentDidMount() {
    this.toaster = (header, label) =>
      Toast.show(
        <Text style={styles.errorHeader}>{`${header} : \n`}<Text style={styles.errorLabel} >{label}</Text></Text>,
        {
          animation: true,
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          backgroundColor: '#FF0000',
        }
      );
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props.message;
    if (id !== nextProps.message.id) {
      const { message: { header, label } } = nextProps;
      console.log('header: ', header);
      console.log('label: ', label);
      this.toaster(header, label);
    }
  }
  
  render() { return null }
}

Alert.propTypes = {
  message: PropTypes.object,
};

export default Alert;
