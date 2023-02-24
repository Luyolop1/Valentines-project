const amountElement = document.getElementById("amount")

console.log(amountElement.value)

paypal.Buttons({
    style: {
      layout: 'vertical',
      color:  'blue',
      shape:  'rect',
      label:  'paypal'
    }
  }).render('#paypal-button-container');

paypal
   .Buttons({
      createOrder: function (data, actions) {
          return actions.order.create({
              purchase_units: [
                  {
                      amount: {
                          value: "0.01",
                      },
                  },
               ],
           })
       },
       onApprove: function (data, actions) {
        return actions.order.capture().then(function(details) {
            alert("Transaction completed by  " + details.payer.name.
            given_name)
        })
       },

    })
    .render("#paypal")