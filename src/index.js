import React from 'react'
import { render } from 'react-dom'

import App from './App'

import { BrowserRouter as Router, Route } from 'react-router-dom'

render (
    <Router>
        <Route component={App}/>
    </Router>,
    document.querySelector('#root')
)