import { cartActionTypes } from './cart.types';

export const toggoleDropdownHidden = () => ({
    type: cartActionTypes.TOGGOLE_DROPDOWN_HIDDEN
});

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});