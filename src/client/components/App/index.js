import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, ListItem, Button } from 'react-native-elements'
import { View, ScrollView, Alert } from 'react-native';
import { search } from '../../actions/dataflows';
import { getFacets } from '../../selectors';
import ResultInfo from '../../components/ResultInfo';
import SidePanel from '../SidePanel';
import EmptySearch from '../EmptySearch';
import ErrorMessage from '../ErrorMessage';
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

const Container = ({ sidePanelIsVisible, dataflows, navigate, facets, doSearch, searchInfo }) => (
  <SideMenu isOpen={sidePanelIsVisible} autoClosing={false} edgeHitWidth={300} menu={<SidePanel facets={facets} search={doSearch} />}>
    <View style={styles.app}>
      <ScrollView style={styles.appScrollView}>
        <ResultInfo searchInfo={searchInfo} />
        {!searchInfo.numFound ? <EmptySearch /> : <SearchResults navigate={navigate} dataflows={dataflows} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
