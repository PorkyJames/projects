export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const FETCH_CART_ITEM = 'FETCH_CART_ITEM';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';

//! Add to Cart Action
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
})

//! Update Cart Items
export const updateCartItem = (itemId, quantity) => ({
    type: UPDATE_CART_ITEM,
    payload: { itemId, quantity }
})

//! Delete Cart Items
export const deleteCartItem = (itemId) => ({
    type: DELETE_CART_ITEM,
    payload: itemId
})

//! Fetch all Cart Items
export const fetchCartItems = (items) => ({
    type: FETCH_CART_ITEM,
    payload: items
})

const initialState = {
    cart: [],
    quantity: 0
}

//! Remember, reducers take in a previous state and an action, and they "reduce" it to one entity; the newly updated
//! instance of state. 
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART_ITEM:
            return state
        // case ADD_TO_CART:
        
        // case UPDATE_CART_ITEM:

        // case DELETE_CART_ITEM:

        default:
            return state
    }
}

export default cartReducer;
