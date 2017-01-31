const defaultState = {
    // ultimately will hold raw data from Mongo but for now, hard-code
    // some items to get started
    items: [
        { name: "First", _id: "1" },
        { name: "Second", _id: "2" }
    ]
}

// the reducer function for items
const items = (state = defaultState, action) => {
    console.log(action.type)
    return state
}

export default items
