
import * as types from '../types/characters'

import {fetch, post} from 'prueba/src/webservices/webservices'

function updateCharacterList( value ) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value
    }
}

export function updateCharacterSelected(value) {

    return {
        type: types.CHARACTERS_UPDATE_CHARACTERS,
        value
    }
}

function setCharacterFetching(value) {
    return {
        type : types.CHARACTERS_SET_FETCHING,
        value
    }
}

export function fetchCharacterList(houseId) {
    return (dispatch, getState) => {

        //Forma alternativa de acceder al state global
        // const state = getState()
        // const houseIdAlternativo = state.houses.item ? state.houses.item.id : null

        dispatch(setCharacterFetching(true))
        dispatch(updateCharacterList([]))

        const fetchURL = '/personajes?casa=' + houseId

        fetch(fetchURL).then( response => {
            // console.log(" fetchCharacterList response ", response)

            dispatch(setCharacterFetching(false))
            dispatch(updateCharacterList(response.records))

        }).catch(error => {
            console.log("error: ", error)
            dispatch(setCharacterFetching(false))
        })
    }
}