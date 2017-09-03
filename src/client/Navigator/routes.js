import App from '../components/App';
import Detail from '../components/Detail';

const routes = {
  Home: {
    screen: App,
    navigationOptions: (() => ({ title: 'Dataflows' })),
  },
  DataFlowDetail: {
    screen: Detail,
    navigationOptions: (({ navigation: { state: { params } } }) => ({ title: params.dataflow.name })),
  },
};

export default routes;