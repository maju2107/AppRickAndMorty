import React, {useState, useEffect} from 'react';
import {FlatList,StyleSheet,TouchableOpacity,Alert,View, Text, Image, Dimensions} from 'react-native';

export default function CharactersListScreen(navigation) {

    const { width, height } = Dimensions.get('window');
    const [character, setcharacter] = useState([]);
    useEffect(() => {
        const endpoint = 'https://rickandmortyapi.com/api/character';
        fetch(endpoint)
            .then(res => res.json())
            .then(json => setcharacter(json.results))
            .catch(() => {
                Alert.alert('Erro', 'Não foi possível carregar os personagens!');
            });
    },[]);

    return(
         <View style={styles.container}>
            <Text style={styles.title}>Personagens de Rick e Morty</Text>
            <FlatList
                data={setchosenCharacter}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Image style={styles.img} source={{uri: item.img}} />
                        <View>
                            <Text style={styles.texto}>{item.name}</Text>
                            <Text style={styles.texto}>{item.specie}</Text>
                            <Text style={styles.texto}>{item.status}</Text>
                        </View>
                    </View>
                )}
            />
        </View>

    );

    const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor:'rgba(7, 43, 89, 1)'
    },
    title: {
        fontSize:40,
        marginBottom:15,
        marginTop: 40,
        color: 'rgba(245, 32, 32, 1)'
    },
    item: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:4
    },
    img: {
        width:width*0.5,
        height:height*0.5,
        marginRight:10,
        borderRadius:5

    },
    texto: {
        fontSize:20,
        fontWeight:'bold',
        color: 'rgba(245, 32, 32, 1)'
    },

    
});
}