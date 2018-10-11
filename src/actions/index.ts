import { Product } from "../models/Product";

export const changeProductColor = (colors: string[]) => ({
    type: 'CHANGE_PRODUCT_COLOR',
    colors
})

export const ProductColors = {
    ALL: 'ALL',
    BLACK_WHITE: 'BLACK_WHITE',
    RED_WHITE: 'RED_WHITE',
    YELLOW_WHITE: 'YELLOW_WHITE',
    BLUE_WHITE: 'BLUE_WHITE'
}

export const changeCategory = (categories: string[]) => ({
    type: 'CHANGE_CATEGORY',
    categories
})

export const Categories = {
    ALL: 'ALL',
    BAG: 'BAG',
    ACCESSORIES: 'ACCESSORIES',
    LUGGAGE: 'LUGGAGE',
    KITS: 'KITS'
}

export const getProducts = (products: Product[], colors: string[] = [], categories: string[] = []) => {
    // return products;
    // alert(JSON.stringify(categories));
    const pro = products.filter(product => {
        return (
            (
                colors.length === 0 || 
                (colors !== []
                &&
                product.color.find((color) => colors.indexOf(color) > -1))
            )
            &&
            (
                categories.length === 0 ||
                categories.indexOf(product.category) > -1
            )
        )
    });
    // alert(JSON.stringify(pro));
    return pro;
}