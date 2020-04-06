import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppRoute from './AppRoute';
import CoronaTestRoute from './CoronaTestRoute';

const AppNavigator = createSwitchNavigator(
  {
    App: AppRoute,
    CoronaTest: CoronaTestRoute,
  },
  {
    initialRouteName: 'App',
  },
);

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer