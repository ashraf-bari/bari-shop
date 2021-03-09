import { cartActionTypes } from './cart.types';

export const toggoleDropdownHidden = () => ({
    type: cartActionTypes.TOGGOLE_DROPDOWN_HIDDEN
});

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = (item) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItemFromCart = (item) => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART,
});