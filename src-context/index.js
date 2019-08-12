// createContext 是 react 提供的一个用于跨组件传值的方法
import React, {Component, createContext} from 'react'
import { render } from 'react-dom'

// creatContext这个方法的结果是一个对象，里面有两个组件Provider和Consumer
// Provider 用于提供状态
// Consumer用于接收状态

const {
    Provider,
    Consumer : CounterConsumer  //结构出来重新赋值给一个叫 CounterConsumer的组件
} = createContext()

// 封装一个基本的Provider，因为直接使用Provider，不方便管理状态
class CounterProvider extends Component {
    constructor () {
        super()
        // 这里的状态就是共享的，任何CounterProvider的后代组件都可以通过CounterConsumer来接收这个值
        this.state = {
            count : 100
        }
    }
    incrementCount = () => {
        this.setState ({
            count : this.state.count + 1
        })
    }
    decrementCount = () => {
        this.setState ({
            count : this.state.count - 1
        })
    }
    render () {
        return (
            <Provider value={{
                count : this.state.count,
                onIncrementCount : this.incrementCount,
                onDecrementCount : this.decrementCount
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

class Counter extends Component {
    render () {
        return (
            <CounterConsumer>
                {
                    ({ count }) => {
                        return <span>{ count }</span>
                    }
                }
            </CounterConsumer>
            
        )
    }
}

class CountBtn extends Component {
    render () {
        return (
            <CounterConsumer>
                {
                    ({onIncrementCount, onDecrementCount}) => {
                        const handle = this.props.type === 'increment' ? onIncrementCount : onDecrementCount
                       return <button onClick={handle}>{this.props.children}</button>
                    }
                }
            </CounterConsumer>
            
        )
    }
}

class App extends Component {
    render () {
        return (
            <>
                <CountBtn type="decrement" >-</CountBtn>
                <Counter />
                <CountBtn type="increment" >+</CountBtn>
            </>
        )
    }
}


render (
    <CounterProvider>
        <App />
    </CounterProvider>,
    document.querySelector('#root')
)