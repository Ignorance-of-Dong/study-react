import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Demo from './Demo';
import PropTypes from 'prop-types'; 

// 状态提升和方法下方的例子

// class Button extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <button style={ {color : this.props.themeColor} }  onClick={()=>this.props.handleClick('red')}>红色</button>
//         <button style={ {color : this.props.themeColor} } onClick={()=>this.props.handleClick('yellow')}>黄色</button>
//       </div>
//     )
//   }
// }

// class Title extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <h3 style={ {color : this.props.themeColor} }>标题</h3>
//     )
//   }
// }

// class App extends Component  {
//   constructor(props) {
//     super(props);
//     this.state = {
//       themeColor : 'blue'
//     }
//   }

//   handleClick(color) {
//     console.log(color);
//     this.setState({
//       themeColor : color
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <Title themeColor={this.state.themeColor} handleClick={()=>this.handleClick()}></Title>
//         <Button themeColor={this.state.themeColor} handleClick={(color)=>this.handleClick(color)}></Button>
//       </div>
//     )
//   }
// }

// react组件类属性 (都是静态属性 默认参数和类型检查)
class Title extends Component {
  static propTypes = {
    title : PropTypes.string
  }
  static defaultProps = {
    title : "这是一个默认的标题"
  }
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}

// Title.defaultProps = {
//   title : "123"
// }

// 生命周期的例子

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRenderTest : false
    }
  }
  render() {
    return (
      <div>
          <Title></Title>
          {/* {this.state.isRenderTest ? <Demo></Demo> : "不渲染Demo"}
          <p>App</p>
          <button type="button" onClick={()=>this.setState({})}>App setState更新</button>
          <button type="button" onClick={()=>this.setState({isRenderTest : !this.state.isRenderTest})}>切换Demo渲染</button> */}
      </div>
    )
  }
}


export default App;
