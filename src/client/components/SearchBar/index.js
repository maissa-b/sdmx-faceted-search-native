import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements'
import { styles } from  './styleSheet';

class SearchBarComponent extends Component {
  state = {
    text: '',
  }

  render() {
    const { search } = this.props;
    const { text } = this.state;
    return (
      <SearchBar
        lightTheme
        containerStyle={styles.searchBarInner}
        inputStyle={styles.searchBar}
        onChangeText={
            (text) => {
              search({ search: text })
              this.setState({ text })
              }
            }
        placeholder='Search'
      />
    )
  }
};

SearchBarComponent.propTypes = {
  search: PropTypes.func.isRequired,
}

export default SearchBarComponent;