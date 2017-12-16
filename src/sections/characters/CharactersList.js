import React, { Component } from 'react'
import {FlatList, View,Text, StyleSheet} from 'react-native'
import { Colors } from 'prueba/src/commons' 
import {connect} from 'react-redux'

class CharactersList extends Component {
     render(){
         return(
             <View style={StyleSheet.container}>
                <Text>Hola que tal</Text>
             </View>
         )
     }

}

const mapStateToPros = (state) => {
    return { 
        house : state.houses.house
    }
}

const mapDispatchToPros = (dispatch, props) => {
    return{
    }
}

export default connect(mapStateToPros, mapDispatchToPros)(CharactersList)

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor: Colors.background,
        paddingVertical: 20
    }
})

  








