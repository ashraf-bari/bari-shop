import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggoleDropdownHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggoleDropdownHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggoleDropdownHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggoleDropdownHidden: () => dispatch(toggoleDropdownHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);