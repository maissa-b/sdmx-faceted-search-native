import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from  './styleSheet';

class SearchBar extends Component {
  state = {
    text: '',
  }

  render() {
    const { search } = this.props;
    const { text } = this.state;
    return (
      <View style={styles.searchBarContainer}>
        <View style={styles.searchIconContainer}><Icon name="search" size={20} color="white" /></View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchBarInput}
            onChangeText={
              (text) => {
                search({ search: text })
                this.setState({ text })
                }
              }
            value={text}
            placeholder={"Search"}
          />
        </View>
      </View>
    )
  }
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
}

export default SearchBar;