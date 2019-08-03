import {createAppContainer, createStackNavigator} from "react-navigation";
import Page1 from "./src/views/home";
import Page2 from "./src/views/about";

export const Routes = createAppContainer(
  createStackNavigator({
    Home: Page1,
    About: Page2,
  })
);