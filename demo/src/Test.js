import React, {Component} from 'react';

export default class Test extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            time : new Date()
        }
        
    }

    tick() {
        this.setState({
            time : new Date()
        })
    }

    // 装配生命周期函数
    componentWillMount() {
        console.log("组件将要加载 componentWillMount")
        this.timeId = setInterval(()=>this.tick(),1000)
    }
    componentDidMount() {
        console.log("组件已经加载 componentDidMount")
    }

    // 更新生命周期函数
    componentWillReceiveProps() {
        console.log("组件将要接受参数 componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log("组件是否应该更新 shouldComponentUpdate");
        console.log(nextState);
        if(nextState.time.getSeconds() % 2 == 0) {
            return true;
        }
        return false;
    }
    componentWillUpdate() {
        console.log("组件将要更新 componentWillUpdate")
    }
    // getSnapshotBeforeUpdate() {
    //     console.log("在更新前获取截图 getSnapshotBeforeUpdate")
    // }
    componentDidUpdate() {
        console.log("组件已经更新 componentDidUpdate")
    }

    // 卸载生命周期函数
    componentWillUnmount() {
        console.log("组件将要卸载");
        clearInterval(this.timeId);
    }
    render() {
        console.log('render');
        return (
            <div style={{border : 'solid black 1px'}}>
                <p>Test</p>
                {this.state.time.getSeconds()}
                <button type="button" onClick={()=>this.setState({})}>setState 更新</button>
                <button type="button" onClick={()=>this.forceUpdate()}>forceUpdate更新</button>
            </div>
        )
    }
}