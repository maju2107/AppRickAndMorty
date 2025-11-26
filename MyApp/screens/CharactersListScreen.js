import React, {useState, useEffect} from 'react';
import {FlatList,StyleSheet,Alert,View, Text, Image, Dimensions, ActivityIndicator} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CharactersListScreen({navigation}) {

    const [character, setcharacter] = useState([]); // armazenar os dados da Api
    const [loading, setLoading] = useState(true); // controlar o estado do carregamento

    useEffect(() => {
        const endpoint = 'https://rickandmortyapi.com/api/character';
        fetch(endpoint)
            .then(res => res.json())
            .then(json => {
                setcharacter(json.results);  
                setLoading(false);
            })
            .catch(() => {
                Alert.alert('Erro', 'Não foi possível carregar os personagens!');
                setLoading(false);
            });
    },[]);

    if(loading) {
        return(
            <View style={styles.fundo}>
                <ActivityIndicator size="large" color="#fff"/>
            </View>
        );
    }

    return(
        <View style={styles.back}>
        <Text style={styles.title}>Rick and Morty's characters</Text>
        <FlatList
            data={character}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={styles.item}>
                    <Image style={styles.img} source={{uri: item.image}} />
                    <View>
                        <Text style={styles.text}>{item.name}</Text> 
                        <Text style={styles.text}>{item.species}</Text>
                        <Text style={styles.text}>{item.status}</Text>
                    </View>
                </View>
            )}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    back: {
        flex:1,
        padding:20,
        backgroundColor:'#97ce4c'
    },
    title: {
        fontSize:40,
        marginBottom:15,
        marginTop: 40,
        color: 'black'
    },
    item: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:4
    },
    img: {
        width:width*0.1,
        height:height*0.2,
        marginRight:10,
        borderRadius:5

    },
    text: {
        fontSize:20,
        fontWeight:'bold',
        color: '#44281d'
    }

});