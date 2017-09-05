import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, ListItem, Button } from 'react-native-elements'
import { View, ScrollView } from 'react-native';
import { search } from '../../actions/dataflows';
import { getFacets } from '../../selectors';
import ResultInfo from '../../components/ResultInfo';
import SidePanel from '../SidePanel';
import { styles } from './stylesheet';

const App = ({ sidePanelIsVisible, dataflows, navigation: { navigate }, facets, search: doSearch, searchInfo }) => (
  <SideMenu isOpen={sidePanelIsVisible} autoClosing={false} edgeHitWidth={300} menu={<SidePanel facets={facets} search={doSearch} />}>
    <View style={styles.app}>
      <ScrollView style={styles.appScrollView}>
        <ResultInfo searchInfo={searchInfo}/>
        <Card style={styles.dataflows} containerStyle={{padding: 0}}>
          {dataflows.map(dataflow =>
            <ListItem
              onPress={() => navigate('Detail', { dataflow })}
              key={dataflow.id}
              title={dataflow.name[0]}
              subtitle={dataflow.description[0]} 
            />)}
        </Card>
      </ScrollView>
    </View>
  </SideMenu>
);

const actions = { search };

const mapStateToProps = state => ({
  dataflows: state.dataflows,
  facets: getFacets(state),
  searchInfo: state.search,
  sidePanelIsVisible: state.toggleSidePanel,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

App.propTypes = {
  dataflows: PropTypes.array.isRequired,
  navigation: PropTypes.object,
  sidePanelIsVisible: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
