const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchAllProducts = (products) => {
    return {
        type: FETCH_PRODUCTS,
        products
    }
}

//! Action creator
export const fetchProducts = () => async (dispatch) => {
    try {
        const res = await fetch('http://localhost:3000/products');
        // console.log(res)
        if (res.ok) {
            const products = await res.json();
            // console.log(products, "<<<<<<This is my products via json")
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products
            })
        } 
    } catch (error) {
        console.error("Error fetching products:", error.message)
    }
}

const initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
}

export default productReducer;