import React, { Component } from 'react'
import {FlatList, View,Text, StyleSheet} from 'react-native'
import { Colors } from 'prueba/src/commons' 
import {connect} from 'react-redux'

import * as CharactersActions from 'prueba/src/redux/actions/characters'
import CharactersCell from "./CharactersCell";



class CharactersList extends Component {

    componentDidMount(){
        const houseId = this.props.house ? this.props.house.id : null
        this.props.fetchCharacterList(houseId)
    }

    onSelect(character){
        this.props.updateSelected(character)
    }

    renderItemFromCharactersList(item, index){
        return (
            <CharactersCell item={item}
                        onSelect={ ( character ) => this.onSelect( character ) }
            />
        )
    }


    render(){

         return(
             <View style={styles.container}>

                 <FlatList
                     data={ this.props.list }
                     renderItem={ ({item, index}) =>  this.renderItemFromCharactersList(item, index) }
                     keyExtractor={ (item, index) => item.id}
                     extraData={ this.props }
                 />

             </View>
         )
     }

}

const mapStateToPros = (state) => {
    return { 
        house : state.houses.item,
        list : state.characters.list
    }
}

const mapDispatchToPros = (dispatch, props) => {
    return{
        fetchCharacterList: (houseId) => {
            dispatch(CharactersActions.fetchCharacterList(houseId))
            dispatch(CharactersActions.fetchCharacterList(houseId))
        },

        updateSelected: (character) =>{
            console.log("updateSelected Seleccionado", character)

        }
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

  








