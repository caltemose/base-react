import {
    FETCH_ITEMS_PENDING,
    FETCH_ITEMS_ERROR,
    FETCH_ITEMS_COMPLETE
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
        default:
            return state
    }
}

export default items
