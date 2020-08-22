import * as actionTypes from './actions';

const initialState = {
    email: "",
    password: "",
    isAuthenticated: false,
    savedCartProducts:[],
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.UPDATE_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case actionTypes.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case actionTypes.UPDATE_AUTHENTICATION:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            } 
        case actionTypes.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                savedCartProducts: [...state.savedCartProducts, action.item]
            }
        case actionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                savedCartProducts: state.savedCartProducts.map((item)=> {
                    if(item.id === action.id) {
                        return {...item, quantity: item.quantity - 1}
                    } 
                    return item    
                    })            
                }
        case actionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                savedCartProducts: state.savedCartProducts.map((item)=> {
                   if(item.id === action.id) {
                       return {...item, quantity: item.quantity + 1}
                   } 
                   return item       
                })
            }
        case actionTypes.CLEAR_PRODUCT:
            return {
                ...state,
                savedCartProducts: state.savedCartProducts.filter(item => item.id !== action.id)

            }
        default: return state;
    }
};

export default reducer;