import React, { Component } from 'react';
import { Modal, View, Text, Button } from 'react-native'
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { styles } from './styleSheet';

class LanguageSelector extends Component {
  state = {
    modalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const { langs, setLocale } = this.props;
    return (
      <View>
        <Icon
          name='cog'
          iconStyle={styles.burgerButton}
          type='font-awesome'
          color='rgb(79, 119, 255)'
          onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
        />
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={styles.modalContainer}>
            {langs.map((lang, index) => 
                <Button
                  key={index}
                  onPress={() => {setLocale(lang); this.setModalVisible(!this.state.modalVisible)}}
                  title={lang}
                  color="rgb(75,75,75)"
                  accessibilityLabel="Close"
                />
              )
            }
            <Button
              onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
              title="Close"
              color="rgb(75,75,75)"
              accessibilityLabel="Close"
            />
          </View>
        </Modal>
      </View>
    );
  }
};

LanguageSelector.propTypes = {
  langs: PropTypes.array,
  setLocale: PropTypes.func,
}

LanguageSelector.defaultProps = {
  langs: [],
}
export default LanguageSelector;