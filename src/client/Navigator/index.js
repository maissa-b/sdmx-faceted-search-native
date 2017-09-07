import React from 'react';
import { StackNavigator } from 'react-navigation';
import App from '../components/App';
import Detail from '../components/Detail';
import Header from '../components/Header';

const Navigator = StackNavigator({
    Home: { screen: App, navigationOptions: () => ({ header: (<Header title="SDMX Faceted Search"/>) }) },
    Detail: { screen: Detail, navigationOptions: ({ navigation : { goBack }}) => ({ header: (<Header goBack={goBack} title="Dataflow detail" />) }) },
});

export default Navigator;
