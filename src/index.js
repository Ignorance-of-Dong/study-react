import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// 创建组件的第一种方式：使用箭头函数，但是名字要大写开始

// const App = (props)=> {
//     return (
//         <div>
//             <h1>Hello {props.title}</h1>
//             <p>优秀的{props.title}</p>
//         </div>
//     )
// }

// 创建组件的第二种方式，使用类继承 Component
class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>类组件</h1>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

// 类组件渲染原理
// const app = new App({
//     title : '范强'
// }).render()


// render 是 react dom 提供的一个方法，这个方法通常只会用一次
ReactDOM.render(
    <App title="react"/>,
    // app,
    document.querySelector('#root')
)