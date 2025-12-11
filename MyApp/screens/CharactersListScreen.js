import React, {useState, useEffect} from 'react';
import {FlatList,StyleSheet,Alert,View, Text, Image, Dimensions, ActivityIndicator,TouchableOpacity} from 'react-native';


const { width, height } = Dimensions.get('window');

export default function CharactersListScreen({navigation}) {

    const endpoint = 'https://rickandmortyapi.com/api/character';

    const [character, setcharacter] = useState([]); // armazenar os dados da Api
    const [loadingInitial, setLoadingInitial] = useState(true); // controlar o estado do carregamento
    const [loading, setLoading] = useState(false); 
    const [nextPage, setNextPage] = useState(endpoint);

    useEffect(() => { // fetch = buscar 
        fetch(endpoint)
            .then(res => res.json())
            .then(json => {
                setcharacter(json.results);  
                setNextPage(json.info.next); // atualiza a próxima página
                setLoadingInitial(false);
            })
            .catch(() => {
                Alert.alert('Erro', 'Não foi possível carregar os personagens!');
                setLoadingInitial(false);
            });
    },[]);

    if(loadingInitial) {
        return(
            <View style={styles.fundo}>
                <ActivityIndicator size="large" color="#fff"/>
            </View>
        );
    }

    const infinityPage = async() => {
        if (!nextPage || loading ) return; // evitar chamadas duplicadas
        setLoading(true);
        try {
            const response = await fetch(nextPage);
            const json = await response.json();

            setcharacter(prevData => [...prevData, ...json.results]); // adicionar novos personagens
             
            setNextPage(json.info.next); 

        } catch (error) {
            console.error(error);
            Alert.alert('Erro, não foi possível carregar a próxima página de personagens!');
            
        } finally {
            setLoading(false);
        }
    };

    return(
        <View style={styles.back}>
        <Text style={styles.title}>Rick and Morty's characters</Text>
        <FlatList
            data={character}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            onEndReached={infinityPage}
            onEndReachedThreshold={0.8} // 80% já chama a outra página
            ListFooterComponent={ loading ? <ActivityIndicator size="small" color="#000"/> : null} // carregamento no singelo no footer
            renderItem={({item}) => (
                <View style={styles.item}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=> navigation.navigate('CharactersDetails', {item})}
                    >
                        <Image style={styles.img} source={{uri: item.image}} />
                        <View>
                            <Text style={styles.text}>{item.name}</Text> 
                            <Text style={styles.text}>{item.species}</Text>
                            <Text style={styles.text}>{item.status}</Text>
                        </View>
                    </TouchableOpacity>
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
        fontSize:50,
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
        color: '#44281d',
    }

});