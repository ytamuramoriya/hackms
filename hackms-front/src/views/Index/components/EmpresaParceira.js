import React, {Component} from 'react';
import {CardItem, Card, Content, Container, H2, Text} from "native-base";
import {Grid, Col} from "react-native-easy-grid";
import Carousel from "react-native-snap-carousel";

export default class EmpresaParceira extends Component{
  constructor(props){
    super(props);
    this.state = {
      empresas: [
        {image: '', title: 'NANA', description: 'fhaskjhsfkahsdkkhfhkjdsfahjkasdfhjkasdfkjh'},
        {image: '', title: 'NANA', description: 'fhaskjhsfkahsdkkhfhkjdsfahjkasdfhjkasdfkjh'},
        {image: '', title: 'NANA', description: 'fhaskjhsfkahsdkkhfhkjdsfahjkasdfhjkasdfkjh'},
        {image: '', title: 'NANA', description: 'fhaskjhsfkahsdkkhfhkjdsfahjkasdfhjkasdfkjh'},
      ]
    };
  }

  _renderItem({item, index}){
    return (
      <Card>
        <CardItem>
          <Container>
            <Grid>
              <Col style={{width: 111}}>

              </Col>
              <Col>
                <H2>{item.title + index}</H2>
                <Text>{item.description}</Text>
              </Col>
            </Grid>
          </Container>
        </CardItem>
      </Card>
    );
  }

 render(){
  return (
      <Carousel
        ref={(c) => {this._carousel = c;}}
        data={this.state.empresas}
        renderItem={this._renderItem}
        sliderWidth={344}
        itemWidth={344}
      />
    );
  }
}