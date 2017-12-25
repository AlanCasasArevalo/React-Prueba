import React, { Component } from 'react'
import { View, Button, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { AsyncCalls, Colors } from 'prueba/src/commons'
import HousesCell from './HousesCell.js'

import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux'
import * as HousesActions from 'prueba/src/redux/actions/houses'


class HouseList extends Component {
    
    componentDidMount() {
        this.props.fethHousesList()
    }

    onSelect(house){
        this.props.updateSelected(house)
    }

    renderFooter() {
        return <ActivityIndicator 
                    animating={this.props.isFetching} 
                    size="large" 
                    color="grey" 
                    style={{ marginVertical: 20 }} 
                />
    }



    renderItemFromHouseList(item, index){
        return (
            <HousesCell item={item}
                onSelect={ ( v ) => this.onSelect( v ) }
            />
        )
    }

    render() {

        return (
            <View style={styles.container}>

                <FlatList
                    data={ this.props.list }
                    ListFooterComponent={ () => this.renderFooter() }
                    renderItem={ ({item, index}) =>  this.renderItemFromHouseList(item, index) }
                    keyExtractor={ (item, index) => item.id}
                    extraData={ this.props }
                    numColumns={2}
                />

            </View>
        )
    }
}

const mapStateToPros = (state) => {
    return { 
        list : state.houses.list,
        selected: state.houses.item,
        isFetching: state.houses.isFetching
    }
}

const mapDispatchToPros = (dispatch, props) => {
    return{
        fethHousesList: () => {
            dispatch(HousesActions.fethHousesList())
        },
        updateSelected: (house) => {
            dispatch(HousesActions.updateHouseSelected(house))
            Actions.CharactersList( { title: house.nombre } )
        }
    }
}

export default connect(mapStateToPros, mapDispatchToPros)(HouseList)

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor: Colors.background,
        paddingVertical: 20
    }
})