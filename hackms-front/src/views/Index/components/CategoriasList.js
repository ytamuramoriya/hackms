import React, {Component} from 'react';
import {FlatList} from 'react-native';
import CardList from "./CardList";

class CategoriasList extends Component {
  render() {
    const list = [
        {title: 'Saude', value: '3522.00', route: 'NANI', color: '#18A49F',key: '1'},
        {title: 'Saude', value: '1.555.150,00', route: 'NANI', color: '#A7D046',key: '2'},
        {title: 'Saude', value: '3522.00', route: 'NANI', color: '#E08BBF',key: '3'},
        {title: 'Saude', value: '3522.00', route: 'NANI', color: '#18A49F',key: '4'},
        {title: 'Saude', value: '3522.00', route: 'NANI', color: '#A7D046',key: '5'},
      ];
    return (
      <FlatList
        style={{backgroundColor: "transparent"}}
        horizontal={true}
        keyExtractor={list.key}
        data={list}
        renderItem={({item, index}) => <CardList  {...{item, index}}/>}
      />
    );
  }
}

export default CategoriasList;