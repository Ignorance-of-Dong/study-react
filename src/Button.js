import React, {Component} from "react";

class Button extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <button>这是来自Button.js的Button组件</button>
        )
    }
}

const Nav = function() {
    return (
        <div>Nav</div>
    )
}
export default Button;
export {Nav};