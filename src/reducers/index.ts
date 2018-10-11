import { combineReducers } from 'redux'
import productColor from './productColor'
import categories from './categories'

export default combineReducers({
    productColor,
    categories
})