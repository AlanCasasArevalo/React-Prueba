import React, { Component } from 'react'
import { View, Button, Text, FlatList, StyleSheet } from 'react-native'
import { AsyncCalls, Colors } from 'prueba/src/commons'
import HousesCell from './HousesCell'

export default class HouseList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            selected: null
        }
    }



    componentWillMount() {
        AsyncCalls.fetchHouseList()
        .then((response) => {
            const houseList = response.data && response.data.records ? response.data.records : []
            this.setState({ list : houseList })
        })
        .catch((error) => {
            console.log("Axios ger tespons", error);
        });
    }

    onSelect(house){
        this.setState({selected:house})
    }

    renderItemFromHouseList(item, index){
        return (
            <HousesCell item={item}
                onSelect={ (house) => this.onSelect(house) }
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data={ this.state.list }
                renderItem={ ({item, index}) =>  this.renderItemFromHouseList(item, index)  }
                keyExtractor={ (item, index) => item.id}
                extraData={ this.state }
                numColumns={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor: 'rgb(42,42,42)',
        paddingVertical: 20
    }
})