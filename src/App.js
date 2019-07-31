import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Button, {Nav} from './Button';

// 自定义组件 (类的方式)
// class Nav extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div style={ {color : "white" , background: 'black'} }>fan</div>
//     )
//   }
// }

// 自定义组件 （函数的方式）
// const Button = function() {
//   return (
//     <button>来自button组件</button>
//   )
// }

function Fan() {
  return (
    <button>来自fan的组件</button>
  )
}

const Qiang = ()=> {
  return (
    <button>来自qiang的组件</button>
  )
}

class App extends Component  {
  constructor() {
    super();
    this.state = {
      like : false
    }
  }
  hanleClick() {
    this.setState(
      {
        like : !this.state.like
      }
    )
  }
  render() {
    console.log('render 函数触发了')
    return (
      <div>
         <Nav />
         <Button></Button>
         <Fan></Fan>
         <Qiang></Qiang>
        <button style="button" style={ this.state.like ? {color : "red"} : {color : 'black'}} 
          onClick={ ()=>this.hanleClick()}>
          {this.state.like ? "已赞" : "喜欢"}
        </button>
      </div>
    )
  }
}

export default App;
