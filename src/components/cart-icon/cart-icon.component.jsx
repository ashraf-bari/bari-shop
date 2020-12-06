import React from 'react';
import { connect } from 'react-redux';

import { toggoleDropdownHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggoleDropdownHidden }) => (
    <div className='cart-icon' onClick={toggoleDropdownHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggoleDropdownHidden: () => dispatch(toggoleDropdownHidden())
});


export default connect(
    null,
    mapDispatchToProps
)(CartIcon);