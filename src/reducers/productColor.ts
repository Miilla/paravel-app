import { ProductColors } from '../actions'

const productColor = (state = ProductColors.BLACK_WHITE, action: any) => {
    switch (action.type) {
        case 'CHANGE_PRODUCT_COLOR':
            return action.color
        default:
            return state
    }
}

export default productColor