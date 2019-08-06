import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types'

// context 上下文
class Title extends Component {
    static contextTypes = {
        themeColor : PropTypes.string,
        handleChangeColor : PropTypes.func
    }
    render() {
        console.log(this.props);
        console.log(this.context);
        const themeColor = this.context.themeColor;
        return (
            <h1 style={{color : themeColor}}>Hello World</h1>
        )
    }
}

class Button extends Component {
    static contextTypes = {
        themeColor : PropTypes.string,
        handleChangeColor : PropTypes.func
    }
    render() {
        const {themeColor,handleChangeColor} = this.context;
        return (
           <div>
               <button type="button" style={{color : themeColor}} onClick={()=>handleChangeColor('red')}>Red</button>
               <button type="button" style={{color : themeColor}} onClick={()=>handleChangeColor('green')}>Green</button>
           </div>
        )
    }
}

class App extends Component {
    static childContextTypes = {
        themeColor : PropTypes.string,
        handleChangeColor : PropTypes.func
    }
    constructor() {
        super();
        this.state = {
            themeColor : 'red'
        }
    }
    handleChangeColor(color) {
        console.log(this)
        this.setState({
            themeColor : color
        })
    }
    getChildContext() {
        return {
            themeColor : this.state.themeColor,
            handleChangeColor : (color)=>this.handleChangeColor(color)
        }
    }
  render() {
    return (
      <div>
         <Title></Title>
         <Button></Button>
      </div>
    )
  }
}


export default App;
