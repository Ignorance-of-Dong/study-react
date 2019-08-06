import React, {Component} from 'react';
import './picture.css';

import image_1 from './images/chuntian.jpg';
import image_2 from './images/qiutian.jpg';
import image_3 from './images/dongtian.jpg';

// 在 react 中渲染一个相似的东西的时候 永远都是使用 map遍历数组
var images = [image_1, image_2, image_3];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index : 0 //与 active 对应
        }
    }
    _goNext() {
        var { index } = this.state;
        if(index === images.length - 1) {
            index = 0;
        } else {
            index ++
        }
        this.setState({
            index : index
        })
    }
    _goPrev() {
        var {index} = this.state;
        if(index === 0) {
            index = images.length - 1;
        } else {
            index --
        }
        this.setState({
            index : index
        })
    }
  render() {
      var { index } = this.state;
    return (
      <div className="wrap">
         <ul className="list">
             {
                //  在es6中  箭头函数后面如果没有花括号 表示 返回的内容
                 images.map((item, i)=>(
                    <li className={`item ${index === i ? 'active' : ''}`} key={i}><img src={item} alt="" /></li>
                 ))
             }
         </ul>
         {/* jsx 中 < 是一个标签的开始 */}
         <button className="btn left" onClick={()=>this._goPrev()}> {'<'} </button>
         <button className="btn right" onClick={()=>this._goNext()}> > </button>
      </div>
    )
  }
}


export default App;
