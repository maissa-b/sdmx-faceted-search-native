import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchBarInner: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'rgb(79, 119, 255)',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    right:0,
    left: 0,
    alignSelf: 'stretch',
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
    backgroundColor: 'white',
    alignSelf: 'stretch',
    marginRight:0,
    marginLeft: 0,
  }
});
