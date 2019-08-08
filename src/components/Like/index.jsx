import React, { Component } from 'react'

export default class Like extends Component {
    constructor () {
        super()
        this.state = {
            isLiked : false
        }
    }
    handleLikeClike = () => {
        // 在react中想要修改数据，就使用 setState方法，setState方法可以有两个参数
        // 第一个参数又有两种情况，第一种情况是一个对象
        // this.setState ({
        //     isLiked : !this.state.isLiked
        // })

        // 第二种情况是一个方法
        this.setState ((prestate) => {
            console.log('setState内部的this.state.isLiked:', this.state.isLiked)
            // 返回一个对象
            return {
                isLiked : !prestate.isLiked
            }
        }, () => {
            // 由于 setState 是异步的，如果想要获得到最新的state，应该在这个回调函数里来获取
            console.log(this.state.isLiked)
        })
        console.log('setState外部的this.state.isLiked:', this.state.isLiked)
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikeClike}>
                    {
                        this.state.isLiked ? '取消 ❤️' : '喜欢 💘'
                    }
                </span>
            </div>
        )
    }
}
