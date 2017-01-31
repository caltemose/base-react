export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING'
export const FETCH_ITEMS_COMPLETE = 'FETCH_ITEMS_COMPLETE'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const fetchItemsPending = () => ({
    type: FETCH_ITEMS_PENDING
})

export const fetchItems = () => dispatch => {
    dispatch(fetchItemsPending())
    return [
        { name: "First", _id: "1" },
        { name: "Second", _id: "2" }
    ]
})
