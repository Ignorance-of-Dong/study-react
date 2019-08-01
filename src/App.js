import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Button, {Nav} from './Button';

import Input from './Input';

import Btn from './components/LikeButton/index'

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

// function Fan() {
//   return (
//     <button>来自fan的组件</button>
//   )
// }

// const Qiang = ()=> {
//   return (
//     <button>来自qiang的组件</button>
//   )
// }

class App extends Component  {
//   constructor() {
//     super();
    // this.state = {
    //   like : false
    // };
  // }
  // hanleClick() {
    // this.setState(
    //   {
    //     like : !this.state.like
    //   }
    // )
    // console.log('你在调用handleClick事件')
  // }
  render() {
    console.log('APP组件更新了')
    return (
      <div>
         {/* <Nav />
         <Button></Button>
         <Fan></Fan>
         <Qiang></Qiang>
        <button style="button" style={ this.state.like ? {color : "red"} : {color : 'black'}} 
          onClick={ ()=>this.hanleClick()}>
          {this.state.like ? "已赞" : "喜欢"}
        </button> */}
        {/* <p onClick={()=>this.hanleClick()}>点击看this</p> */}

        {/* <Input></Input> */}
        {/* <Button></Button>
        <Btn></Btn>
        <p onClick={()=>this.setState({})}>点击更新App组件</p> */}
        <hr />
        <Nav title="校园">
            <p>这是一个笑话</p>
            <h2>这是一个小丑</h2>
            <Button name="点击一下你就爽了"></Button>
            <Button name="干就完了"></Button>
        </Nav>
      </div>
    )
  }
}

export default App;
