import React, {Component} from 'react';
import MainContainer from "../components/MainContainer";
import { List, ListItem, Card, CardItem, Left, Body, Right, H1, Text, View  } from 'native-base';
import {StyleSheet, TouchableOpacity } from 'react-native';


class ListagemAcao extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <MainContainer>
                <List>
                    <React.Fragment>
                        <ListItem style={{borderColor: 'transparent', paddingBottom: 0}}>
                            <Left>
                                <Text style={{fontWeight: '500'}}>Assistencia Farmaceutica</Text>
                            </Left>
                            <Right>
                                <TouchableOpacity  button onPress={() => {this.props.navigation.navigate('DetalharVerba')}}>
                                    <Text style={{color: '#f09c3b'}}>Ver mais</Text>
                                </TouchableOpacity >

                            </Right>
                        </ListItem>
                        <ListItem style={{borderColor: '#666666', paddingTop: 0}}>
                            <View style={{
                                flexDirection: "column",
                                padding: 10,
                            }}>
                                <H1>Valor Total: 0000.00</H1>
                                <Text style={{color: '#666666'}}>Apoio financeiro para distruibuição e aquisição de remédios </Text>
                            </View>
                        </ListItem>
                    </React.Fragment>
                    <React.Fragment>
                        <ListItem style={{borderColor: 'transparent', paddingBottom: 0}}>
                            <Left>
                                <Text style={{fontWeight: '500'}}>Assistencia Farmaceutica</Text>
                            </Left>
                            <Right>
                                <Text style={{color: '#f09c3b'}}>Ver mais</Text>
                            </Right>
                        </ListItem>
                        <ListItem style={{borderColor: '#666666', paddingTop: 0}}>
                            <View style={{
                                flexDirection: "column",
                                padding: 10,
                            }}>
                                <H1>Valor Total: 0000.00</H1>
                                <Text style={{color: '#666666'}}>Apoio financeiro para distruibuição e aquisição de remédios </Text>
                            </View>
                        </ListItem>
                    </React.Fragment>
                </List>
            </MainContainer>
        );
    }
}

export default ListagemAcao;