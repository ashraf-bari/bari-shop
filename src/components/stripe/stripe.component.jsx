import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IAOZOIPiiNWeSsC6Wkeku69uMZnWX9brlSLVAyIFXxfmA1eztGG89piUE5veRHwvFc9PKKCpPbsjdf6Lz8WK9EH007hXH1y7v';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful, Thank You');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Bari Shop'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;