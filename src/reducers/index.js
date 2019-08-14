// 在实际项目中，由于只有单一的store，但是状态会有很多分类，所以我们需要划分reducer， createStore的参数又只接受一个
// reducer，所以，redux比较聪明的提供了以个用于合并多个reducer的方法。注意：不要手动合并
import { combineReducers } from 'redux'   //用来合并reducer的
import cart from './cart'

export default combineReducers({
    cart
})