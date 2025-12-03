import React, {useState, useEffect} from 'react';
import {FlatList,StyleSheet,TouchableOpacity,Alert,View, Text, Image, Dimensions} from 'react-native';

export default function CharactersDetailsScreen({route}) {
    const { item } = route.params;

    return(
        <View style={{alignItems:'center'}}>
        <Image source={{uri: item.image}} style={{width: 200, height:200, alignItems:'center'}}/>
        <Text>{item.name}</Text>
        <Text>{item.species}</Text>
        <Text>{item.status}</Text>
        <Text>{item.gender}</Text>
        <Text>{item.location.name}</Text>
        <Text>{item.origin.name}</Text>
        </View>
    );
    
}
