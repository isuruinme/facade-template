const { ORGANIZATION_TYPES } = require("../constants");

class PaymentSaveFacade{
    constructor(type, payload) {
        this.type = type;
        this.payload = payload;
    }

    savePayment(){
        switch (this.type){
            case ORGANIZATION_TYPES.TYPE1:
                return this.paymentSaveType1(this.payload);
            default:
                return this.commonWorkflowBuilder();
        }
    }

    paymentSaveType1(){
        console.log('Save payment process has been started');
        return true;
    }

    commonPaymentSave(){

    }
}

module.exports = {PaymentSaveFacade};
