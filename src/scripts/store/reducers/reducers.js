import { combineReducers } from 'redux'

import items from './item-reducers'

const reducers = combineReducers({ items })

export default reducers
