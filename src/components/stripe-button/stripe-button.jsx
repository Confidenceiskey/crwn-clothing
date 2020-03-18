import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_si8N1fFZz46TLLImgMRMggFM00uHxvHjV7';

  const onToken = token => alert('Payment Successful!')

  return (
    <StripeCheckout 
      label='Pay now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
