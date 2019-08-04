import {createAppContainer, createStackNavigator} from "react-navigation";
import Index from "./src/views/Index";
import ListagemTipoRepasse from "./src/views/ListagemTipoRepasse";
import ListagemAcao from "./src/views/ListagemAcao";
import DetalharVerba from "./src/views/DetalharVerba";
import Page2 from "./src/views/about";
import MainContainer from "./src/components/MainContainer";

export const Routes = createAppContainer(
  createStackNavigator({
    Home: Index,
    About: Page2,
    ListagemTipo: ListagemTipoRepasse,
    ListagemAcao: ListagemAcao,
    DetalharVerba: DetalharVerba,
  })
);