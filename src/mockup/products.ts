import { Product } from '../models/Product';
import { Categories, ProductColors } from '../actions';
// import 


export const products: Product[] = [
    {
        name: 'The Ultralight Canvas Main',
        category: Categories.BAG,
        color: [ProductColors.BLACK_WHITE],
        description: 'just just',
        price: [100],
        src: '1.png'
    },
    {
        name: 'The Ultralight Main Line',
        category: Categories.ACCESSORIES,
        color: [ProductColors.BLACK_WHITE, ProductColors.YELLOW_WHITE, ProductColors.BLUE_WHITE],
        description: 'grab and go',
        price: [22,40,55],
        src: '2.png'
    },
    {
        name: 'Canvas Main Line',
        category: Categories.LUGGAGE,
        color: [ProductColors.BLACK_WHITE, ProductColors.RED_WHITE],
        description: 'just grab',
        price: [100,40],
        src: '3.png'
    },
    {
        name: 'Ultralight Canvas Main Line',
        category: Categories.LUGGAGE,
        color: [ProductColors.BLACK_WHITE, ProductColors.YELLOW_WHITE, ProductColors.RED_WHITE],
        description: 'just go',
        price: [30,40,50],
        src: '4.png'
    },
    {
        name: 'The Canvas Main Line',
        category: Categories.KITS,
        color: [ProductColors.BLACK_WHITE, ProductColors.RED_WHITE],
        description: 'just and',
        price: [20,55],
        src: '5.png'
    },
    {
        name: 'Ultralight Main',
        category: Categories.KITS,
        color: [ProductColors.BLUE_WHITE, ProductColors.BLACK_WHITE],
        description: 'nothing',
        price: [99,89],
        src: '2.png'
    }
]

export default products;