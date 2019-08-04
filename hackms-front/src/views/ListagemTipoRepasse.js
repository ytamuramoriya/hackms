import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import MainContainer from "../components/MainContainer";
import { List, ListItem, Card, CardItem, Text, H1 } from 'native-base';

class ListagemTipoRepasse extends Component {

    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <MainContainer title="Aplicação de Verbas">
                <List style={styles.cidade}>
                    <ListItem style={styles.cidade} ItemDivider>
                        <Text >
                            Campo Grande
                        </Text>
                    </ListItem>

                </List>
                <TouchableOpacity  button onPress={() => {this.props.navigation.navigate('ListagemAcao')}}>
                    <Card style={styles.card}>
                        <CardItem style={styles.cardItemListagem}>
                            <Text style={styles.cinza}>Listagem</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemEstadual}>
                            <H1 >Estadual</H1>
                        </CardItem>
                        <CardItem style={styles.cinza}>
                            <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum </Text>
                        </CardItem>
                    </Card>
                </TouchableOpacity >

                <TouchableOpacity  button onPress={() => {this.props.navigation.navigate('ListagemAcao')}}>
                    <Card style={styles.card}>
                        <CardItem style={styles.cardItemListagem}>
                            <Text style={styles.cinza}>Listagem</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemEstadual}>
                            <H1 >Estadual</H1>
                        </CardItem>
                        <CardItem style={styles.cinza}>
                            <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum </Text>
                        </CardItem>
                    </Card>
                </TouchableOpacity >

            </MainContainer>
        );
    }
}

const styles = StyleSheet.create({
    cidade: {
        backgroundColor: '#ebe5fc',
        height: 48,
    },
    cinza: {
        color: "#666666",
    },
    cardItemEstadual: {
        marginLeft: 10,
    },
    cardItemListagem: {
        paddingBottom: 0
    },
    card: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    }
});


export default ListagemTipoRepasse;