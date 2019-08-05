import React, {Component} from 'react';

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date()
        }
        this.timeId = setInterval(()=>this.tick(),1000)
    }

    tick() {
        this.setState({
            time : new Date()
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // 函数的返回结果将会被添加到state中  ，添加/更新state的内容
        // 如果返回 null state不需要任何改变
        console.log("静态生命周期函数");
        return null
    }

    getSnapshotBeforeUpdate() {
        console.log('更新前获取快照');
        return "fan";
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <p>Demo</p>
                {this.state.time.getSeconds()}
            </div>
        )
    }

    componentDidMount() {
        console.log("组件已经加载完成 componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("组件是否更新 shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps,prevState,info) {
        console.log("组件更新完成 componentDidUpdate");
        console.log(info);
    }

    componentWillUnmount() {
        console.log("组件将要卸载 componentWillUnmount");
        clearInterval(this.timeId);
    }
}