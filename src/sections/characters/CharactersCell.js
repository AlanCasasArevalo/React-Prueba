import React, { Component } from 'react'
import {View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, Platform} from 'react-native'
import { Colors } from 'prueba/src/commons'


export default class CharactersCell extends Component{

    static defaultProps = {
        onSelect: () => {},
        item : {}
    }

    render() {

        const { item, onSelect } = this.props
        const imageURL = item.image_dir ? { uri : item.image_dir } : null
        const name = item.nombre ? item.nombre : ''
        const age = item.edad ? item.edad : ''

        return (
            <TouchableOpacity onPress={ () => onSelect(item) }>
                <Image source={ imageURL } style={styles.image} resizeMode={'cover'} />
                <View style={styles.textContainer}>
                    <Text style={styles.textName}> {name} </Text>
                    <Text style={styles.textAge}> {age} </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width : '100%',
        height: 200
    },
    textContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        top: 0,
        right:0,
        left:0,
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    textName:{
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    textAge:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    }

})