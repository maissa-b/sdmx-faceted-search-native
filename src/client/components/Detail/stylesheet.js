import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  detail: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 15,
  },
  detail_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  detail_title: {
    color: '#4F77FF',
    fontWeight: 'bold',
  },
  detail_description: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
