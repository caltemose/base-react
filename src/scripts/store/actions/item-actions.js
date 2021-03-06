import axios from 'axios'
import { getErrorFromErrorResponse } from '../store-helpers'

// ---------------------------------------------------------------- //
// Actions for Getting Items from Database
// ---------------------------------------------------------------- //

export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING'
export const FETCH_ITEMS_COMPLETE = 'FETCH_ITEMS_COMPLETE'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

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


// ---------------------------------------------------------------- //
// Actions for Creating New Items in the Database
// ---------------------------------------------------------------- //

export const CREATE_ITEM_PENDING = 'CREATE_ITEM_PENDING'
export const CREATE_ITEM_COMPLETE = 'CREATE_ITEM_COMPLETE'
export const CREATE_ITEM_ERROR = 'CREATE_ITEM_ERROR'

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

// ---------------------------------------------------------------- //
// Actions for Editing Items in the Database
// ---------------------------------------------------------------- //

export const EDIT_ITEM_PENDING = 'EDIT_ITEM_PENDING'
export const EDIT_ITEM_COMPLETE = 'EDIT_ITEM_COMPLETE'
export const EDIT_ITEM_ERROR = 'EDIT_ITEM_ERROR'

const editItemPending = (_id) => ({
    type: EDIT_ITEM_PENDING,
    payload: _id
})

const editItemComplete = (item) => ({
    type: EDIT_ITEM_COMPLETE,
    payload: item
})

const editItemError = (_id, error) => ({
    type: EDIT_ITEM_ERROR,
    payload: { _id, error }
})

export const requestEditItem = (_id, name) => dispatch => {
    dispatch(editItemPending(_id))

    const item = { _id, name }

    return axios.put('/api/items', item)
        .then(response => {
            return dispatch(editItemComplete(item))
        })
        .catch(error => {
            const msg = getErrorFromErrorResponse(error, 'Item could not be edited')
            return dispatch(editItemError(_id, msg))
        })
}

// ---------------------------------------------------------------- //
// Actions for Deleting Items in the Database
// ---------------------------------------------------------------- //

export const DELETE_ITEM_PENDING = 'DELETE_ITEM_PENDING'
export const DELETE_ITEM_COMPLETE = 'DELETE_ITEM_COMPLETE'
export const DELETE_ITEM_ERROR = 'DELETE_ITEM_ERROR'

const deleteItemPending = (_id) => ({
    type: DELETE_ITEM_PENDING,
    payload: _id
})

const deleteItemComplete = (item) => ({
    type: DELETE_ITEM_COMPLETE,
    payload: item
})

const deleteItemError = (_id, error) => ({
    type: DELETE_ITEM_ERROR,
    payload: { _id, error }
})

export const requestDeleteItem = (_id) => dispatch => {
    dispatch(deleteItemPending(_id))

    return axios.delete(`/api/items/${_id}`)
        .then(response => {
            return dispatch(deleteItemComplete(_id))
        })
        .catch(error => {
            const msg = getErrorFromErrorResponse(error, 'Item could not be deleted')
            return dispatch(deleteItemError(_id, msg))
        })
}

