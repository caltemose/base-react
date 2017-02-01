export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING'
export const FETCH_ITEMS_COMPLETE = 'FETCH_ITEMS_COMPLETE'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const fetchItemsPending = () => ({
    type: FETCH_ITEMS_PENDING
})

export const fetchItemsComplete = () => ({
    type: FETCH_ITEMS_COMPLETE,
    payload: [
        { name: "New One", _id: "1" },
        { name: "Two New", _id: "2" },
        { name: "Mr. Three!", _id: "3" },
        { name: "Four...and Four", _id: "4" },
        { name: "Five golden rings!", _id: "5" }
    ]
})

export const fetchItemsError = () => ({
    type: FETCH_ITEMS_ERROR,
    payload: "There was an error loading the items."
})
