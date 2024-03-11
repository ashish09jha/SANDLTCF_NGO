import React from 'react'

function paymentGateway() {
    const canMakePaymentCache = 'canMakePaymentCache';

/**
 * @private
 * @param {PaymentRequest} request 
 * @return {Promise} 
 */
function checkCanMakePayment(request) {
  if (sessionStorage.hasOwnProperty(canMakePaymentCache)) {
    return Promise.resolve(JSON.parse(sessionStorage[canMakePaymentCache]));
  }
  var canMakePaymentPromise = Promise.resolve(true);

  if (request.canMakePayment) {
    canMakePaymentPromise = request.canMakePayment();
  }

  return canMakePaymentPromise
      .then((result) => {
        sessionStorage[canMakePaymentCache] = result;
        return result;
      })
      .catch((err) => {
        console.log('Error calling canMakePayment: ' + err);
      });
}
function onBuyClicked() {
    if (!window.PaymentRequest) {
      console.log('Web payments are not supported in this browser.');
      return;
    }
    const supportedInstruments = [
      {
        supportedMethods: ['https://tez.google.com/pay'],
        data: {
          pa: 'merchant-vpa@xxx',
          pn: 'Merchant Name',
          tr: '1234ABCD',
          url: 'https://url/of/the/order/in/your/website',
          mc: '1234', 
          tn: 'Purchase in Merchant',
        },
      }
    ];
    const details = {
      total: {
        label: 'Total',
        amount: {
          currency: 'INR',
          value: '10.01', 
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
  
    var canMakePaymentPromise = checkCanMakePayment(request);
    canMakePaymentPromise
        .then((result) => {
          showPaymentUI(request, result);
        })
        .catch((err) => {
          console.log('Error calling checkCanMakePayment: ' + err);
        });
  }
/**
* @private
* @param {PaymentRequest} request 
* @param {Promise} canMakePayment 
*/
function showPaymentUI(request, canMakePayment) {
    if (!canMakePayment) {
      handleNotReadyToPay();
      return;
    }
    let paymentTimeout = window.setTimeout(function() {
      window.clearTimeout(paymentTimeout);
      request.abort()
          .then(function() {
            console.log('Payment timed out after 20 minutes.');
          })
          .catch(function() {
            console.log('Unable to abort, user is in the process of paying.');
          });
    }, 20 * 60 * 1000); 
    request.show()
        .then(function(instrument) {
   
          window.clearTimeout(paymentTimeout);
          processResponse(instrument);
        })
        .catch(function(err) {
          console.log(err);
        });
   }

  return (
    <div>
      <button onClikc={onBuyClicked}>Donate</button>
    </div>
  )
}

export default paymentGateway
