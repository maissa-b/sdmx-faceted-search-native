import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  facets: {
    backgroundColor: 'white',
    margin: 'auto',
    width:190,
    borderRadius: 2,
    marginBottom: 12,
    paddingBottom: 4,
    shadowColor: 'rgb(25,25,25)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderColor: 'rgb(200,200,200)',
    borderWidth: StyleSheet.hairlineWidth,
  },
  facetHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft:10,
    paddingTop:5,
    paddingBottom:5,
    shadowColor: 'rgb(25,25,25)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderBottomColor: 'rgb(230,230,230)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 3,
  },
  name: {
    color: 'rgb(75, 75, 75)',
    marginLeft: 5,
    fontSize: 13,
  },
  checkBox: {
    display: 'flex',
    flex: 1,
    padding: 5,
    paddingLeft: 8,
  },
  icon: {
    width:12,
    height:12,
  },
  label: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 8,
    marginTop:5,
    marginBottom:5,
  },
  labelText:
  {
    color: 'rgb(75, 75, 75)',
    fontSize: 10,
  },
  labelIconContainer: {
    display: 'flex',
    width:30,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  emptyIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  }
});

export const checkBoxTextStyle = {
  color: 'rgb(75, 75, 75)',
  fontSize: 10,
}