import React from 'react';
import { Card, ListItem, Text } from 'react-native-elements'
import { styles } from './styleSheet';
import { onlyUpdateForKeys } from 'recompose';
import EmptySearch from '../EmptySearch';
import PropTypes from 'prop-types';

const Dataflows = ({ dataflows, searchInfo, navigate }) => (
  <Card style={styles.dataflows} containerStyle={{padding: 0}}>
    {dataflows.map(dataflow =>
      <ListItem
        onPress={() => navigate('Detail', { dataflow })}
        key={dataflow.id}
        title={dataflow.name[0]}
        subtitle={dataflow.description[0]} 
      />)}
      {!searchInfo.numFound && <EmptySearch />}
  </Card>
);

Dataflows.propTypes = {
  dataflows: PropTypes.array.isRequired,
  searchInfo: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
}

const enhance = onlyUpdateForKeys(['dataflows', 'searchInfo']);

export default enhance(Dataflows);