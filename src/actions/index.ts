
export const changeProductColor = (color: string[]) => ({
    type: 'CHANGE_PRODUCT_COLOR',
    color
})

export const ProductColors = {
    ALL: 'ALL',
    BLACK_WHITE: 'BLACK_WHITE',
    RED_WHITE: 'RED_WHITE',
    YELLOW_WHITE: 'YELLOW_WHITE',
    BLUE_WHITE: 'BLUE_WHITE'
}

export const changeCategory = (category: string[]) => ({
    type: 'CHANGE_CATEGORY',
    category
})

export const Categories = {
    ALL: 'ALL',
    BAG: 'BAG',
    ACCESSORIES: 'ACCESSORIES',
    LUGGAGE: 'LUGGAGE',
    KITS: 'KITS'
}