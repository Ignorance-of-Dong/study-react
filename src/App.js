import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

 class Button extends Component {
   constructor(props) {
      super(props);
   }


   render() {
     var theme = this.props.theme;
      return (
        <div>
          <button style={ {color : theme} } onClick={()=>this.props.handleClick('red')}>红色</button>
          <button style={ {color : theme} } onClick={()=>this.props.handleClick('green')}>绿色</button>
        </div>
      )
   }
 }

 class Title extends Component {
   constructor(props) {
      super(props);
   }
   render() {
     var theme = this.props.theme
     return (
       <h2 style={ {color : theme} }>标题</h2>
     )
   }
 }

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      theme : 'red'
    }
  }

  handleClick(color) {
    console.log(color)
    this.setState({
      theme : color
    })
  }

  render() {
    return (
        <div>
          <h5>App</h5>
          <Title theme={this.state.theme}></Title>
          <Button theme={this.state.theme} handleClick={(color)=>this.handleClick(color)}></Button>
        </div>
    );
  }
}

export default App;
