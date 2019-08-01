import React, {Component} from "react";

class Button extends Component {
    constructor() {
        super();
    }
    render() {
        console.log('Button组件更新了')
        return (
            <button>
                {this.props.name}
            </button>
        )
    }
}

// 函数的 组件
const Nav = function(props) {
    return (
        <div style={{color : 'white', background : 'black'}}>
            {props.title}
            {props.children}
        </div>
    )
}
export default Button;
export {Nav};