import React, { Component } from 'react'

import { Route, NavLink as Link } from 'react-router-dom'

import {
    Home,
    Artical,
    Users
} from './views'

export default class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/artical">文章</Link></li>
                    <li><Link to="/users">用户</Link></li>
                </ul>
                <Route component={Home} path="/home" />
                <Route component={Artical} path="/artical" />
                <Route component={Users} path="/users" />
            </div>
        )
    }
}
