import Page1 from './components/home';
import Page2 from './components/about';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
    createStackNavigator({
      Home: Page1,
      About: Page2,
    })
);

export default Routes;