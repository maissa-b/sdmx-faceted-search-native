import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { styles } from './stylesheet';

const Pager = ({ searchValue, start, rows, numFound, search }) => {
  if (numFound <= rows) {
    return <View />;
  }
  const actualPage = (Math.ceil((start + 1) / rows));
  const lastPage = (Math.ceil(numFound / rows));
  return (
    <View style={styles.pager}>
      <Icon
        style={styles.pagerItem}
        type='font-awesome'
        name='angle-double-left'
        onPress={() => search(searchValue, 0, rows)}
      />
      {actualPage !== 1 &&
        <Icon
          style={styles.pagerItem}
          type='font-awesome'
          name='angle-left'
          onPress={start === 0 ? () => {} : () => search(searchValue, start - rows, rows)}
        />
      }
      <Text>Page {actualPage}</Text>
      {actualPage !== lastPage &&
        <Icon
          style={styles.pagerItem}
          type='font-awesome'
          name='angle-right'
          onPress={start + rows >= numFound ? () => {} : () => search(searchValue, start + rows, rows)}
        />
      }
      <Icon
        style={styles.pagerItem}
        type='font-awesome'
        name='angle-double-right'
        onPress={() => search(searchValue, (lastPage * rows) - rows, rows)}
      />
    </View>
  );
};

Pager.propTypes = {
  searchValue: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  numFound: PropTypes.number.isRequired,
  search: PropTypes.func.isRequired,
};

Pager.defaultProps = {
  numFound: 0,
};

export default Pager;
