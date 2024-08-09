const FETCH_PRODUCTS = "FETCH_PRODUCTS";

const fetchAllProducts = (products) => {
    return {
        type: FETCH_PRODUCTS,
        products
    }
}

//! Action creator
export const fetchProducts = () => async (dispatch) => {
    try {
        const res = await fetch('/api/products');
        const products = await res.json();
        if (products) {
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

initialState = {};

const productReducer = (initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}

export default productReducer;