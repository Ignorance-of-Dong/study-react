import React, {Component, Fragment} from 'react'

// react 以数据为驱动
class Xiaojiejie extends Component {
    // 初始化数据
    constructor (props) {
        super(props)
        this.state = {
            inputValue : '',
            list : ['基础按摩','精油推背']
        }
    }
    render () {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={(e)=>this.inputChange(e)}/>
                    <button onClick={()=>this.addList()}>增加服务</button>
                </div>
                <ul>
                   {
                       this.state.list.map((item, i)=>(
                           <li key={i+item} onClick={(index)=>this.deleteItem(i)}>{item}</li>
                       ))
                   }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue : e.target.value
        })
    }

    // 增加列表项
    addList() {
        this.setState({
            list : [...this.state.list, this.state.inputValue],
            inputValue : ''
        })
    }

    // 删除列表项
    deleteItem(index) {
        console.log(index)
        const list = this.state.list
        list.splice(index,1)
        this.setState({
            list : list
        })
    }

} 

export default Xiaojiejie