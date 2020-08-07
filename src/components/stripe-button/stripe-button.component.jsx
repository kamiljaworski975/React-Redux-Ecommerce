import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {ReactComponent as logo} from '../../assets/crown.svg'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price + 100;
    const publisableKey = 'pk_test_51HDL6TFPTAy7V6nHBgoGEGrwfkqzDMonFc3tICSXLJUWOIzcdFD0X9bZTSTiJVerZIcXXQtJBoLuuhiAUXHjxQaM008C8BTjhL';

    const onToken = token => {
        console.log(token)
        alert('payment succesful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Ecommerce'
            billingAddress
            shippingAddress
            image={logo}
            description= {`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publisableKey}
            amount={priceForStripe}
        />
        
    )
}

export default StripeCheckoutButton