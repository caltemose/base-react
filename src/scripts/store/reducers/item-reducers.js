import {
    FETCH_ITEMS_PENDING,
    FETCH_ITEMS_ERROR,
    FETCH_ITEMS_COMPLETE,
    CREATE_ITEM_PENDING,
    CREATE_ITEM_ERROR,
    CREATE_ITEM_COMPLETE
} from '../actions/actions'

const defaultState = {
    items: [],
    itemsLoading: false,
    itemsError: null
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

        default:
            return state
    }
}

export default items
