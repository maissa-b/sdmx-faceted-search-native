import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    display: 'flex',
    alignSelf: 'stretch',
    marginBottom:13,
  },
  searchBar: {
    display: 'flex',
    backgroundColor: 'white',
    height:30,
    width: 190,
    marginLeft:10,
    marginRight: 10,
    borderRadius: 3,
    shadowColor: 'rgb(25,25,25)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderColor: 'rgb(200,200,200)',
    borderWidth: StyleSheet.hairlineWidth,
  },
  searchBarInput: {
    display: 'flex',
    height:30,
    width: 190,
    color: 'rgb(75, 75, 75)',
    fontSize:12,
    paddingLeft:10,
    paddingRight:10,
  },
  searchIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom:10,
  }
});
