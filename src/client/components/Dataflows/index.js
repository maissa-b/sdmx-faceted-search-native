import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import { onlyUpdateForKeys } from 'recompose';
import { styles } from './styleSheet';
import EmptySearch from '../EmptySearch';

const Dataflows = ({ dataflows, searchInfo, navigate }) => (
  <View>
    {!searchInfo.numFound ? <EmptySearch /> : (
      <Card style={styles.dataflows} containerStyle={{padding: 0}}>
        {dataflows.map(dataflow =>
          <ListItem
            onPress={() => navigate('Detail', { dataflow })}
            key={dataflow.id}
            title={dataflow.name[0]}
            subtitle={dataflow.description[0]} 
          />)}
      </Card> 
    )}
  </View>
);

Dataflows.propTypes = {
  dataflows: PropTypes.array.isRequired,
  searchInfo: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
}

const enhance = onlyUpdateForKeys(['dataflows', 'searchInfo']);

export default enhance(Dataflows);