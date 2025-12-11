import React, {useState, useEffect} from 'react';
import {FlatList,StyleSheet,TouchableOpacity,Alert,View, Text, Image, Dimensions} from 'react-native';
import img from '../assets/img.png';

export default function CharactersDetailsScreen({route}) {
    const { item } = route.params;

    return(
        <View style={styles.back}>
        <Image source={{uri: item.image}} style={styles.characterImg}/>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.species}</Text>
        <Text style={styles.text}>{item.status}</Text>
        <Text style={styles.text}>{item.gender}</Text>
        <Text style={styles.text}>{item.location.name}</Text>
        <Text style={styles.text}>{item.origin.name}</Text>

        <Image style={styles.img} source={img}/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    characterImg: {
        width: 200,
        height:200,
        alignItems:'center',
        marginTop: 10,
        borderRadius: 30
    },
    img: {
        marginTop: 5
    },
    back: {
        alignItems:'center',
        backgroundColor:'rgba(177, 205, 232, 1)'
    },
    text: {
        fontSize: 20,
        fontWeight:'bold'
    }
});
