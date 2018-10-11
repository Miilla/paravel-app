// import { Categories } from '../actions'

const categories = (state = [], action: any) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state
    }
}

export default categories