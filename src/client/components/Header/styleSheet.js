import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height:70,
    paddingTop: 10,
    shadowColor: 'rgb(55,55,55)',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderBottomColor: 'rgb(220,220,220)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerTitle: {
    color: 'rgb(79, 119, 255)',
  },
});
