import React, { Component } from 'react'

import { Route, NavLink as Link, Redirect, Switch } from 'react-router-dom'

import {
    Home,
    Artical,
    ArticalDetail,
    Users,
    NotFound
} from './views'

export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/artical">文章</Link></li>
                    <li><Link to="/users">用户</Link></li>
                </ul>
                <Switch>
                    <Route component={Home} path="/home" />
                    <Route component={Artical} path="/artical" exact />
                    <Route component={ArticalDetail} path="/artical/:id" />
                    <Route component={NotFound} path="/404" />
                    <Route component={Users} path="/users" />
                    <Redirect to="/home" from="/" exact />
                    <Redirect to="/404" />
                </Switch>
            </div>
        )
    }
}
