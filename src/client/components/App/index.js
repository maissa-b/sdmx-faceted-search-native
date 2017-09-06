import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, ListItem, Button } from 'react-native-elements'
import { View, ScrollView, Alert } from 'react-native';
import { search } from '../../actions/dataflows';
import { getFacets } from '../../selectors';
import { onlyUpdateForKeys } from 'recompose';
import { compose } from 'recompose';
import ResultInfo from '../../components/ResultInfo';
import SidePanel from '../SidePanel';
import Dataflows from '../Dataflows';
import { styles } from './stylesheet';

const SearchResults = ({ dataflows, navigate }) => (
  <View>
    <Card style={styles.dataflows} containerStyle={{padding: 0}}>
      {dataflows.map(dataflow =>
        <ListItem
          onPress={() => navigate('Detail', { dataflow })}
          key={dataflow.id}
          title={dataflow.name[0]}
          subtitle={dataflow.description[0]} 
        />)}
    </Card>
  </View>
);


const App = ({ sidePanelIsVisible, dataflows, navigation: { navigate }, facets, search: doSearch, searchInfo }) => (
  <SideMenu isOpen={sidePanelIsVisible} edgeHitWidth={300} menu={<SidePanel facets={facets} search={doSearch} />}>
    <View style={styles.app}>
      <ScrollView style={styles.appScrollView}>
        <ResultInfo numFound={searchInfo.numFound} searchValue={searchInfo.searchValue}/>
        <Dataflows dataflows={dataflows} navigate={navigate} searchInfo={searchInfo}/>
      </ScrollView>
    </View>
  </SideMenu>
)

const App = ({ sidePanelIsVisible, dataflows, navigation: { navigate }, facets, search: doSearch, searchInfo, message }) => {
  if (message.header) {
    return <ErrorMessage message={message} navigate={navigate} />
  }
  return (
    <Container
      sidePanelIsVisible={sidePanelIsVisible}
      dataflows={dataflows}
      navigate={navigate}
      facets={facets}
      doSearch={doSearch}
      searchInfo={searchInfo}
    />
  )
};

const actions = { search };

const mapStateToProps = state => ({
  dataflows: state.dataflows,
  facets: getFacets(state),
  searchInfo: state.search,
  sidePanelIsVisible: state.toggleSidePanel,
  message: state.message,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

App.propTypes = {
  dataflows: PropTypes.array.isRequired,
  navigation: PropTypes.object,
  sidePanelIsVisible: PropTypes.bool.isRequired,
  message: PropTypes.object,
};

Container.propTypes = {
  dataflows: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired,
  sidePanelIsVisible: PropTypes.bool.isRequired,
  doSearch: PropTypes.func.isRequired,
};

SearchResults.propTypes = {
  dataflows: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired,
};

const enhance = compose (
  connect(mapStateToProps, mapDispatchToProps),
  onlyUpdateForKeys(['dataflows', 'sidePanelIsVisible', 'facets', 'searchInfo'])
)

export default enhance(App);
