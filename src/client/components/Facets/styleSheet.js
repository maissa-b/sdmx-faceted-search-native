import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  facets: {
    backgroundColor: 'white',
    minHeight: 100,
    margin: 'auto',
    width:190,
    borderRadius: 3,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  facetHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(250,250,250)',
    paddingLeft:10,
    paddingTop:5,
    paddingBottom:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  name: {
    color: 'rgb(75, 75, 75)',
    marginLeft: 5,
    fontSize: 13,
  },
  checkBox: {
    flex: 1,
    padding: 10,
  },
  icon: {
    width:12,
    height:12,
  },
});

export const checkBoxTextStyle = {
  color: 'rgb(75, 75, 75)',
  fontSize: 11,
}