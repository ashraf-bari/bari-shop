import shopActionTypes from './shop.types';

// import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: null, /** changed from shop data to null*/
};


const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
            };
        default:
            return state;
    }
};


export default shopReducer;