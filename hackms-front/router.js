import {createAppContainer, createStackNavigator} from "react-navigation";
import Index from "./src/views/Index/Index";
import Page2 from "./src/views/about";
import MainContainer from "./src/components/MainContainer";

export const Routes = createAppContainer(
  createStackNavigator({
    Home: Index,
    About: Page2,
  })
);