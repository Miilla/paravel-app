import { Categories } from '../actions'

const categories = (state = Categories.ALL, action: any) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return action.category
        default:
            return state
    }
}

export default categories