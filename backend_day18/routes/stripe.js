var router = require('express').Router();
var path = require("path");
const stripe = require("stripe");

router.get('/paayment', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/html/payment.html"));

});

router.post('/payment', function(req, res) => {
    try {
          const session = await stripe.checkout.session.create({
              line_items: [{
                  amount: req.body.price*100,
                  name: "shopping",
                  currency: "usd",
                  quantity: 1
              }],
              payment_method_types: ["card"],
              success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
              CANCEL_URL: `${req.headers.origin}?cancelled=true`
          });
          res.redirect(303, session.url)
    }  catch(err) {
        res.status(500).send({err})
    }

});

module.exports = router;