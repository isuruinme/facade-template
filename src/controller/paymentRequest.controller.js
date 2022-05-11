const {PaymentRequestInterface} = require("../interfaces/PaymentRequest.interface");
const newPaymentRequest = async (req, res, next) => {
    try {
        const paymentBuilderInterface = new PaymentRequestInterface(req.params.organization, req.body);
        const status = await paymentBuilderInterface.generatePaymentRequest();
        return res.send(status?'Payment request has been saved':'Error while generating new payment request')
    }catch (e) {
        return res.send('Error while generating new payment request')
    }
}

module.exports = {newPaymentRequest};
