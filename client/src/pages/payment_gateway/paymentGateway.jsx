import React from 'react';

function checkCanMakePayment(request) {
  return request.canMakePayment()
    .then(result => {
      if (!result) {
        handleNotReadyToPay();
      }
      return result;
    });
}

function showPaymentUI(request, result) {
  if (result) {
    request.show()
      .then(paymentResponse => {
        processResponse(paymentResponse);
      })
      .catch(err => {
        console.log('Error showing payment UI: ' + err);
      });
  }
}

const paymentGateway = () => {
  const onBuyClicked = () => {
    if (!window.PaymentRequest) {
      console.log('Web payments are not supported in this browser.');
      return;
    }

    const supportedInstruments = [
      {
        supportedMethods: ['https://tez.google.com/pay'],
        data: {
          pa: '9999777292m@pnb', // UPI merchant VPA
          pn: 'SURINDER AND LALITA TREHAN CHARITABLE FOUNDATION', // Merchant Name
          tr: '1234ABCD', // Your custom transaction reference ID
          url: 'https://url/of/the/order/in/your/website',
          mc: '8299', // Your merchant category code
          tn: '', // Transaction Note, if needed
          am: '', // Amount, if needed
          cu: 'INR', // Currency
          mode: '02', // Payment mode
        },
      }
    ];

    const details = {
      total: {
        label: 'Total',
        amount: {
          currency: 'INR',
          value: '10.01', // sample amount
        },
      },
      displayItems: [{
        label: 'Original Amount',
        amount: {
          currency: 'INR',
          value: '10.01',
        },
      }],
    };

    let request = null;
    try {
      request = new PaymentRequest(supportedInstruments, details);
    } catch (e) {
      console.log('Payment Request Error: ' + e.message);
      return;
    }
    if (!request) {
      console.log('Web payments are not supported in this browser.');
      return;
    }

    const canMakePaymentPromise = checkCanMakePayment(request);
    canMakePaymentPromise
      .then((result) => {
        showPaymentUI(request, result);
      })
      .catch((err) => {
        console.log('Error calling checkCanMakePayment: ' + err);
      });
  };

  return (
    <div>
      <button onClick={onBuyClicked}>
        Donate
      </button>
    </div>
  );
};

export default paymentGateway;
