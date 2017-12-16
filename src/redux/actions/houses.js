
import * as types from '../types/houses'

import {fetch, post} from 'prueba/src/webservices/webservices'

function updateHouseList( value ) {
    return {
        type: types.HOUSES_UPDATE_LIST,
        value
    }
}

export function updateHouseSelected(value) {

    return {
        type: types.HOUSES_UPDATE_HOUSE, 
        value
    }
}

function setHouseFetching(value) {
    return {
        type : types.HOUSES_SET_FETCHING,
        value
    }
}

export function fethHousesList() {
    return (dispatch, getState) => {

        dispatch(setHouseFetching(true))
        
        const fetchURL = '/casas'
        fetch(fetchURL).then( response => {
            dispatch(setHouseFetching(false))
            const list = response.records
            dispatch(updateHouseList(list))
        })
        .catch((error) => {
            dispatch(setHouseFetching(false))
            console.log("Axios ger tespons", error);
        });
    }
}