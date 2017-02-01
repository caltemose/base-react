import axios from 'axios'
import { getErrorFromErrorResponse } from '../store-helpers'

export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING'
export const FETCH_ITEMS_COMPLETE = 'FETCH_ITEMS_COMPLETE'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const CREATE_ITEM_PENDING = 'CREATE_ITEM_PENDING'
export const CREATE_ITEM_COMPLETE = 'CREATE_ITEM_COMPLETE'
export const CREATE_ITEM_ERROR = 'CREATE_ITEM_ERROR'


const fetchItemsPending = () => ({
    type: FETCH_ITEMS_PENDING
})

const fetchItemsComplete = (items) => ({
    type: FETCH_ITEMS_COMPLETE,
    payload: items
})

const fetchItemsError = (msg) => ({
    type: FETCH_ITEMS_ERROR,
    payload: msg
})

export const fetchItems = () => dispatch => {
    dispatch(fetchItemsPending())

    return axios.get('/api/items')
        .then(response => {
            return dispatch(fetchItemsComplete(response.data))
        })
        .catch(error => {
            const msg = getErrorFromErrorResponse(error, 'Could not retrieve items from API')
            return dispatch(fetchItemsError(msg))
        })
}

const createItemPending = () => ({
    type: CREATE_ITEM_PENDING
})

const createItemComplete = (item) => ({
    type: CREATE_ITEM_COMPLETE,
    payload: item
})

const createItemError = (error) => ({
    type: CREATE_ITEM_ERROR,
    payload: error
})

export const requestCreateItem = (name) => dispatch => {
    dispatch(createItemPending())

    let newItem = { name }

    return axios.post('/api/items', newItem)
        .then(response => {
            newItem = {
                ...newItem,
                _id: response.data._id
            }
            return dispatch(createItemComplete(newItem))
        })
        .catch(error => {
            const msg = getErrorFromErrorResponse(error, 'Item could not be created')
            return dispatch(createItemError(msg))
        })
}
