import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
      <button style="button" style={ this.state.like ? {color : "red"} : {color : 'black'}} 
      onClick={ ()=>this.hanleClick()}>
        {this.state.like ? "已赞" : "喜欢"}
      </button>
    )
  }
}

export default App;
