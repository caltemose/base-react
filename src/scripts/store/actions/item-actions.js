export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING'
export const FETCH_ITEMS_COMPLETE = 'FETCH_ITEMS_COMPLETE'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const fetchItemsPending = () => ({
    type: FETCH_ITEMS_PENDING
})

export const fetchItemsComplete = (items) => ({
    type: FETCH_ITEMS_COMPLETE,
    payload: items
})

export const fetchItemsError = () => ({
    type: FETCH_ITEMS_ERROR,
    payload: "There was an error loading the items."
})

export const fetchItems = () => dispatch => {
    dispatch(fetchItemsPending())
    return fetch('/api/items')
        .then(response => {
            return response.json()
        })
        .then(items => {
            return dispatch(fetchItemsComplete(items))
        })
        .catch(error => {
            console.log(error)
            // currently not using the real error in the UI but we certainly
            // could improve the user feedback by providing more specific
            // text than what's hard-coded in fetchItemsError()
            return dispatch(fetchItemsError())
        })
}
