const express = require('express');
const {newPaymentRequest} = require("../src/controller/paymentRequest.controller");
const {AuthenticateFacade} = require("../src/facade/Authenticate.facade");
const router = express.Router();
router.post('/outbound/:organization', (req, res, next)=>{
    const authenticateFacade = new AuthenticateFacade(req);
    authenticateFacade.authenticate().then(async ()=> {
        await newPaymentRequest(req, res, next);
    });
});

module.exports = router;
