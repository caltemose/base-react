import React from 'react'
import ReactDOM from 'react-dom'

import Root from './scripts/containers/Root'
import configureStore from './scripts/store/store'
import './styles.css'

const store = configureStore()

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)
