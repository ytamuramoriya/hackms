import React, {Component} from 'react';
import {FlatList} from 'react-native';
import CardList from "./CardList";

class CategoriasList extends Component {
  render() {
    const list = [
        {title: 'Saúde', value: '3.789.451.87', route: 'NANI', color: '#18A49F',key: '1'},
        {title: 'Educação', value: '1.555.150,86', route: 'NANI', color: '#A7D046',key: '2'},
        {title: 'Obras', value: '3.525.220.85', route: 'NANI', color: '#E08BBF',key: '3'},
        {title: 'Transito', value: '1.486.587.82', route: 'NANI', color: '#18A49F',key: '4'},
        {title: 'Responsabilidade Fiscal', value: '3522.00', route: 'NANI', color: '#A7D046',key: '5'},
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