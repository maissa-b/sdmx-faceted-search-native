import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dataflows: {
    display: 'flex',
    alignSelf: 'stretch',
  },
  loadMoreButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(79, 119, 255)',
    borderRadius: 100,
    height:30,
    width:100,
    marginTop:20,
    shadowColor: 'rgb(55,55,55)',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderBottomColor: 'rgb(220,220,220)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  loadMoreButtonText: {
    color: 'rgb(65,65,65)',
  }
});
