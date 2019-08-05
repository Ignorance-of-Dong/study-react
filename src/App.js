import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'

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
          {this.state.isRenderTest ? <Test></Test> : "不渲染"}
          <p>App</p>
          <button type="button" onClick={()=>this.setState({})}>App setState更新</button>
          <button type="button" onClick={()=>this.setState({isRenderTest : !this.state.isRenderTest})}>切换Test渲染</button>
      </div>
    )
  }
}


export default App;
