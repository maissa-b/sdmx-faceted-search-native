import { StackNavigator } from 'react-navigation';
import App from '../components/App';
import Detail from '../components/Detail';

const Navigator = StackNavigator({
    App: { screen: App, navigationOptions: { title: 'Dataflows' } },
    Detail: { screen: Detail, navigationOptions: { title: 'Detail', gesturesEnabled: true } },
});

export default Navigator;
