import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { onlyUpdateForKeys, compose } from 'recompose';
import { search } from '../../actions/dataflows';
import { getFacets } from '../../selectors';
import ResultInfo from '../ResultInfo';
import SidePanel from '../SidePanel';
import Alert from '../Alert';
import Dataflows from '../Dataflows';
import { styles } from './stylesheet';

const App = ({ sidePanelIsVisible, dataflows, navigation: { navigate }, facets, search: doSearch, searchInfo, message }) => (
  <SideMenu isOpen={sidePanelIsVisible} edgeHitWidth={300} menu={<SidePanel facets={facets} search={doSearch} />}>
    <Alert message={message} />
    <View style={styles.app}>
      <ScrollView style={styles.appScrollView}>
        <ResultInfo numFound={searchInfo.numFound} searchValue={searchInfo.searchValue}/>
        <Dataflows dataflows={dataflows} navigate={navigate} searchInfo={searchInfo}/>
      </ScrollView>
    </View>
  </SideMenu>
);

App.propTypes = {
  sidePanelIsVisible: PropTypes.bool.isRequired,
  dataflows: PropTypes.array.isRequired,
  navigation: PropTypes.object,
  facets: PropTypes.array,
  search: PropTypes.func.isRequired,
  searchInfo: PropTypes.object,
  message: PropTypes.object,
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


const enhance = compose (
  connect(mapStateToProps, mapDispatchToProps),
  onlyUpdateForKeys(['dataflows', 'sidePanelIsVisible', 'facets', 'searchInfo', 'message'])
)

export default enhance(App);
