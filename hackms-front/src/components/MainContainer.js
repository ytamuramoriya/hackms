import React, {Component, Fragment} from 'react';
import {Container, Content, Header, Left, Button, Text, Icon, Body, Right, Title} from "native-base";

export default class MainContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const title = this.props.title ? this.props.title : "Opnião Cidadã";
    return (
      <Container>
        <Header  style={{marginTop: 25, backgroundColor: '#072e11'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}