// import { ProductColors } from '../actions'

const colors = (state =[], action: any) => {
    switch (action.type) {
        case 'CHANGE_PRODUCT_COLOR':
            return {                
                ...state,
                colors: action.colors
            }
        default:
            return state
    }
}

export default colors