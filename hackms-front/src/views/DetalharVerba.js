import React, {Component} from 'react';
import MainContainer from "../components/MainContainer";
import { List, ListItem, Card, CardItem, Left, Body, Right, H1, H3, Text, View, Container  } from 'native-base';
import {StyleSheet, TouchableOpacity } from 'react-native';


class DetalharVaga extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <MainContainer title="Detalhar Verba">
                <Container style={{marginHorizontal: 15, marginVertical: 20}}>
                    <H1>Assistência Farmacêutica</H1>
                    <H3 style={{color: "#666666", marginVertical: 20}}>Apoio financeiro para distribuição e aquisição de medicamentos</H3>

                    <Text style={{fontWeight: '500', fontSize: 16, marginVertical: 10}}>
                        Valor Total: 0000,00
                    </Text>

                    <Text style={{fontWeight: '500', fontSize: 16, marginVertical: 10}}>
                        Valor Desconto: 0000,00
                    </Text>

                    <Text style={{fontWeight: '500', fontSize: 16, marginVertical: 10}}>
                        Valor Liquidado: 0000,00
                    </Text>
                </Container>
            </MainContainer>
        );
    }
}

export default DetalharVaga;