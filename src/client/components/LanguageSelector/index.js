import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native'
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
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={styles.modalContainer}>
            {langs.map(lang => 
                <TouchableOpacity key={lang} activeOpacity={1} style={styles.langButton} onPress={() => {setLocale(lang); this.setModalVisible(!this.state.modalVisible)}}>
                  <Text style={styles.langButtonText}>{lang}</Text>
                </TouchableOpacity>
              )
            }
            <TouchableOpacity style={styles.langButton} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
              <Text style={styles.langButtonText}>Close</Text>
            </TouchableOpacity>
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