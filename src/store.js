// createStore是redux提供的一个用于创建store的方法，这个原理中讲过
import { createStore } from 'redux'

// 引入合并后的reducer
import rootReducer from './reducers'

// createStore的第一个参数必须是一个reducer，如果是多个，请在reducers目录下先使用combineReducers合并之后再导出
export default createStore(rootReducer)