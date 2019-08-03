import React from 'react';
import {Text, H3} from 'native-base';
import {View, StyleSheet} from "react-native";

const CardList = ({item}) => {
  return (
    <View style={[style.cardContainer,{ backgroundColor: item.color}]}>
      <Text style={{color: 'white', opacity: .7, fontSize: 18}}>{item.title}</Text>
      <H3 style={{color: 'white'}}>
        R$ {item.value}
      </H3>
      <Text style={{marginTop: 10, fontWeight: '500', opacity: .4}}>Ver Dados</Text>
  </View>
  );
};
const style = StyleSheet.create({
  cardContainer: {
    padding: 15,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'column',
    borderRadius: 8,
    maxHeight: 110,
    minWidth: 130,
  },
});

export default CardList;