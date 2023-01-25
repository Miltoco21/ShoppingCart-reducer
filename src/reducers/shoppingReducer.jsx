import { TYPES } from "../actions/shoppingActions";

//creacion de estado inicial
export const shoppingInitialState = {

    products: [
        { id: 1, name: "producto 1", price: 100 },
        { id: 2, name: "producto 2", price: 700 },
        { id: 3, name: "producto 3", price: 100 },
        { id: 4, name: "producto 4", price: 600 },
        { id: 5, name: "producto 5", price: 5200 },
        { id: 6, name: "producto 6", price: 100 },

    ],
    cart: []
    //inicia en carrito vacio por defecto 
};


//funcion reductora funcion pura recibe esdtado y acciones
export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {

            let newItem = state.products.find((product) => product.id === action.payload)

            let itemInCart = state.cart.find(item => item.id === newItem.id)

            return itemInCart ? { ...state, cart: state.cart.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item) } : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] }

            // return {
            //     ...state,
            //     cart: [...state.cart, newItem],
            // }retorna estado inicial y nuevo elemento
        }

        case types.REMOVE_ONE_FROM_CART: { }
        case types.REMOVE_ALL_FROM_CART: { }
        case types.CLEAR_CART: { }

        default:
            return state


    }
}