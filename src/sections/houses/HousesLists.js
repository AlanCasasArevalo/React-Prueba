import React, { Component } from 'react'
import { View, Button, Text, FlatList } from 'react-native'
import axios from 'axios'

export default class HouseList extends Component {


    constructor(props) {
        super(props)

        this.state = {
            list: [],
            selected:null
        }
    }

    componentWillMount() {
        let list = null
        axios.get('http://146.185.137.85/got/web/casas')
            .then((response) => {
                console.log("Axios ger tespons", response);
                const houseList = response.data && response.data.records ? response.data.records : []

                // Es lo mismo todas las sentencias.
                // this.setState({ list : list })
                // this.setState({
                //     list : response.data && response.data.records ? response.data.records : []
                // })
                this.setState({ list : houseList })
            })
            .catch((error) => {
                console.log("Axios ger tespons", error);
            });
    }

    renderItemFromHouseList(item){
        return(
            <View style={ { height: 200, backgroundColor: 'red', marginVertical: 10 } }>
                <Text>{item.nombre}</Text>
                <Text> {item.lema} </Text>
                <Text> {item.id} </Text>
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
                <Text>
                    Lista de casas
                </Text>
                <Text>
                    {'Casa seleccionada: ' + nombre }
                </Text>
                <FlatList
                data={ this.state.list }
                renderItem={ ({item}) =>  this.renderItemFromHouseList(item)  }
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