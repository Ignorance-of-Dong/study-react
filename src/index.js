import React, {Component, createContext} from 'react'
import { render } from 'react-dom'

const {
    Provider,
    Consumer : CounterConsumer
} = createContext()

class CounterProvider extends Component {
    constructor () {
        super()
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