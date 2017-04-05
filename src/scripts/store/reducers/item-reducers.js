import {
    FETCH_ITEMS_PENDING,
    FETCH_ITEMS_ERROR,
    FETCH_ITEMS_COMPLETE,
    CREATE_ITEM_PENDING,
    CREATE_ITEM_ERROR,
    CREATE_ITEM_COMPLETE,
    EDIT_ITEM_PENDING,
    EDIT_ITEM_COMPLETE,
    EDIT_ITEM_ERROR,
    DELETE_ITEM_COMPLETE

} from '../actions/actions'

const defaultState = {
    items: [],
    itemsLoading: false,
    itemsError: null
}

// the reducer function for an item
const item = (state = {}, action) => {
    switch (action.type) {
        case EDIT_ITEM_PENDING:
            if (state._id !== action.payload) {
                return state
            }
            return {
                ...state,
                pending: true
            }
        case EDIT_ITEM_ERROR:
            if (state._id !== action.payload._id) {
                return state
            }
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        case EDIT_ITEM_COMPLETE:
            if (state._id !== action.payload._id) {
                return state
            }
            return {
                ...action.payload,
                pending: false,
                error: null
            }

        default:
            return state
    }
}

// the reducer function for items
const items = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_PENDING:
            return {
                ...state,
                itemsLoading: true,
                itemsError: null
            }
        case FETCH_ITEMS_ERROR:
            return {
                ...state,
                itemsLoading: false,
                itemsError: action.payload
            }
        case FETCH_ITEMS_COMPLETE:
            return {
                ...state,
                items: [ ...action.payload ],
                itemsLoading: false,
                itemsError: null,
            }

        case CREATE_ITEM_PENDING:
            return {
                ...state,
                creatingItem: true,
                createItemError: null
            }
        case CREATE_ITEM_ERROR:
            return {
                ...state,
                creatingItem: false,
                createItemError: action.payload
            }
        case CREATE_ITEM_COMPLETE:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ],
                creatingItem: false,
                createItemError: null
            }

        case EDIT_ITEM_PENDING:
        case EDIT_ITEM_COMPLETE:
        case EDIT_ITEM_ERROR:
            return {
                ...state,
                items: state.items.map(i => item(i, action))
            }
        
        case DELETE_ITEM_COMPLETE:
            return {
                ...state,
                items: state.items.filter(i => i._id !== action.payload)
            }

        default:
            return state
    }
}

export default items

export const getItems = ({ items }) => items.items



// comment out everything below to disable testing
/*
import expect from 'expect'

const tests = () => {
    expect(items(defaultState, { type: FETCH_ITEMS_PENDING }))
        .toEqual({
            items: [],
            itemsLoading: true,
            itemsError: null
        })

    expect(items(defaultState, { type: FETCH_ITEMS_ERROR, payload: "Error!" }))
        .toEqual({
            items: [],
            itemsLoading: false,
            itemsError: "Error!"
        })

    expect(items(defaultState, { type: FETCH_ITEMS_COMPLETE, payload: [1, 2, 3] }))
        .toEqual({
            items: [1, 2, 3],
            itemsLoading: false,
            itemsError: null
        })

    expect(items(defaultState, { type: CREATE_ITEM_PENDING }))
        .toEqual({
            ...defaultState,
            creatingItem: true,
            createItemError: null
        })

    expect(items(defaultState, { type: CREATE_ITEM_ERROR, payload: "Item could not be created" }))
        .toEqual({
            ...defaultState,
            creatingItem: false,
            createItemError: "Item could not be created"
        })

    const newItem = { _id: "1000000", name: "Tester" }

    expect(items(defaultState, { type: CREATE_ITEM_COMPLETE, payload: newItem }))
        .toEqual({
            ...defaultState,
            items: [ newItem ],
            creatingItem: false,
            createItemError: null
        })

    console.log('item-reducers passed all tests')
}

tests()
*/
