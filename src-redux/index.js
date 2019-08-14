import React from 'react'
import { render } from 'react-dom'

import App from './App'
import store from './store'
window.store = store

render (
    <App store={store}/>,
    document.querySelector('#root')
)