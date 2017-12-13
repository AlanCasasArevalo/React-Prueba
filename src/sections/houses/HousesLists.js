import React, { Component } from 'react'
import { View, Button, Text, FlatList, StyleSheet } from 'react-native'
import { AsyncCalls, Colors } from 'prueba/src/commons'


export default class HouseList extends Component {


    constructor(props) {
        super(props)

        this.state = {
            list: [],
            selected:null
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

    checkIfIsSelectedItem(item){
        if (this.state.selected && (this.state.selected.nombre == item.nombre)){
            return true
        }else{
            return false
        }
    }

    renderItemFromHouseList(item, index){
        // const cellStyle = {backgroundColor: 'pink'}
        const isSelected = this.checkIfIsSelectedItem(item)
        const cellStyle = isSelected ? { backgroundColor: Colors.pink } : { backgroundColor: Colors.red }
        const titleStyle = isSelected ? { color: 'white' } : { color: 'black' }

        return(
            //Manda siempre el ultimo objeto
            <View style={ [styles.cell, cellStyle] }>
                <Text
                style={ titleStyle }
                >
                    {item.nombre}
                </Text>
                <Button
                    title={ 'Selecciona una casa:' }
                    onPress={() => this.setState({ selected: item })}
                />
            </View>            
        )
    }

    render() {
        const nombre = this.state.selected ? this.state.selected.nombre : ''
        return (
            <View>
                <Text style={ styles.title }>
                    { nombre }
                </Text>
                <FlatList
                data={ this.state.list }
                renderItem={ ({item, index}) =>  this.renderItemFromHouseList(item, index)  }
                keyExtractor={ (item, index) => item.id}
                extraData={ this.state }
                // renderItem={ ({item}) => {
                //     return (
                //         <Text>{item.nombre}</Text>
                //     )
                // }}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    cell:{
        height: 200,
        marginVertical: 10
    },
    title: {
        fontSize:20,
        textAlign: 'center',
        margin: 20
    }
})