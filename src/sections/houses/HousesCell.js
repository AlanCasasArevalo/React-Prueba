import React, { Component } from 'react'
import {View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, Platform} from 'react-native'

export default class HousesCell extends Component{
    
    static defaultProps = {
        onSelect: () => {},        
        item : {}
    }
    
    render() {
        
        const { item, onSelect } = this.props
        const imageURL = item.image_dir ? { uri : item.image_dir } : null
        // const imageURL = item.image_dir ? { uri : item.image_dir } : require('path_a_nuestra_imagen_por_defecto')
        
        console.log("El item es : ", item)
        return (
            <TouchableOpacity onPress={ () => onSelect(item) } style={styles.container} >
                <Image source={ imageURL } style={styles.image} resizeMode={'contain'} />
            </TouchableOpacity>            
        )
    }
}

const styles = StyleSheet.create({
    container : {
        margin: 10,
        width : Dimensions.get('window').width / 2 - 20,
        height : (Dimensions.get('window').width / 2 -20) * (857/600),

        ...Platform.select({
            ios:{
                shadowColor: 'rgba(255,255,255,0.1)',
                shadowOpacity:1,
                shadowOffset: { height: 4, width: 4},
                shadowRadius: 2
            },
            android:{
                elevation: 4
            }
        })
    },
    image:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left : 0
    }
})