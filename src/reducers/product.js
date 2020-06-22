// import Products from "../components/Products";
import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_SUCCESS } from "../actions/constants";
import { act } from "react-test-renderer";

const initialState = {
    allProducts: [],
    isLoading: false
}

export default function Product(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return { ...state, isLoading: true }
        case GET_ALL_PRODUCTS_SUCCESS:
            // console.log(allProducts.payload.map(x => x.name).join(','))
            return { ...state, allProducts: action.payload, isLoading:false }
        default:
            return { ...state }
    }
}

// export default Product