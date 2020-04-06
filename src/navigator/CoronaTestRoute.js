import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';
import * as CoronaTest from '../screens/CoronaTestScreen';

const CoronaTestNavigator = createStackNavigator(
  {
    ScreenOne: CoronaTest.ScreenOne,
    ScreenTwo: CoronaTest.ScreenTwo,
    ScreenThree: CoronaTest.ScreenThree,
    ScreenFour: CoronaTest.ScreenFour,
	  ScreenFive: CoronaTest.ScreenFive,
    ScreenSix: CoronaTest.ScreenSix,
    ScreenResult: CoronaTest.ScreenResult,
  },
  {
    initialRouteName: 'ScreenOne',
    headerMode: 'none',
    transitionConfig: () => fromRight(500),
  },
);

const CoronaTestContainer = createAppContainer(CoronaTestNavigator)

export default CoronaTestContainer