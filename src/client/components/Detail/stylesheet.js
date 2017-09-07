import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  detail: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  detail_content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  detail_title: {
    color: 'white',
    fontWeight: 'bold',
  },
  detail_key: {
    color: 'rgb(79, 119, 255)',
  },
  detail_value: {
    alignSelf: 'flex-end',
    color: 'rgb(65,65,65)'
  },
  detailScrollView: {
    padding: 15,
  },
  detailtitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(79, 119, 255)',
    padding:10,
    marginBottom: 10,
    borderRadius: 4,
    shadowColor: 'rgb(55,55,55)',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderBottomColor: 'rgb(220,220,220)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  detailContainer: {
    display: 'flex',
    marginBottom: 30,
  }
});
