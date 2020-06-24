const { GET_ALL_PRODUCTS } = require("./constants")

export const GetAllProducts = () => ({
    type: GET_ALL_PRODUCTS,
    payload: []
})