import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');


    const {_id,price,patient,email} = appointment;

    useEffect(() => {
      fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `user ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card == null){
            return
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        setCardError(error?.message || '');
        setProcessing(true);
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }else{
            setCardError('');
            setTransactionId(paymentIntent.id);
            toast.success("Congrats! Your payment is completed.")

            const payment = {
                appointment:_id,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/booking/${_id}`,{
                method:'PATCH',
                headers:{
                    'authorization': `user ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data =>{
                setProcessing(false)
                console.log(data)
            });
        }
    }
    return (
    <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
            {cardError && <p className='text-error mt-1'>{cardError}</p>}
            {transactionId && <p className='text-success mt-1'>Your TransactionId {transactionId}</p>}
            <button className='my-2 btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
    </form>
    );
};

export default CheckoutForm;
/* disabled={!stripe || !clientSecret || success} */