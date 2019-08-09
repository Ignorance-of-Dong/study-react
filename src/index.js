import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

const Counter = () => {
    // useState 是一个方法，这个方法的参数就是默认值。结果是一个数组，数组的第一个元素就是 state，第二个元素相当于 setState
    // 解构出来数组中的两个值
    const [count, setCount] = useState(0)
    // useEffect的参数是一个回调，不管是组件挂载还是更新，都会触发这个回调方法，类似于componentDidMount和
    // componentDidUpdate的结合
    useEffect(() => {
        console.log('渲染了')
        console.log(document.title)
        document.title = `当前的数量为 ${count}`
    })
    return (
        <div>
            <p>当前的数量为 {count}</p>
            {/* 这里的setCount就是useState所生成的方法 (第二个). 注意：和setState不一样的地方在于参数，
            这里的参数就是一个新值即可 */}
            <button onClick={() => {setCount(count - 1)}}>-</button>
            {/* 这里就是useState创建的值 (第一个) */}
            <span>{count}</span>
            <button onClick={() => {setCount(count + 1)}}>+</button>
        </div>
    )
}

render (
    <Counter />,
    document.querySelector('#root')
)