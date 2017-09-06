import React from 'react';
import { StackNavigator } from 'react-navigation';
import App from '../components/App';
import Detail from '../components/Detail';
import Header from '../components/Header';

const Navigator = StackNavigator({
    App: { screen: App, navigationOptions: { header: (<Header title="SDMX Faceted Search"/>) } },
    Detail: { screen: Detail, navigationOptions: { title: 'Detail'   } },
});

export default Navigator;
