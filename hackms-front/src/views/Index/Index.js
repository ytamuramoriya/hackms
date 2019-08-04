import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Grid, Row} from "react-native-easy-grid";
import {Container, H3} from "native-base";
import MainContainer from "../../components/MainContainer";
import CategoriasList from "./components/CategoriasList";
import EmpresaParceira from "./components/EmpresaParceira";

class Index extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <MainContainer>
        <Container style={style.container}>
          <H3 style={{marginVertical: 16, marginLeft: 16}}>Categoria de Serviço</H3>
          <Grid>
            <Row size={10}>
              <CategoriasList/>
            </Row>
            <Row size={25}>
              <EmpresaParceira/>
            </Row>
          </Grid>
        </Container>
      </MainContainer>
    );
  }
}

export default Index;

const style = StyleSheet.create({
  container: {  }
});
