import productReducer from "./productActions";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    products: productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk)); 

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

const store = configureStore();

export default store;