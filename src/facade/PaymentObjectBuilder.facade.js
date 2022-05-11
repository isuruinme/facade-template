const { ORGANIZATION_TYPES } = require("../constants");

class PaymentObjectBuilderFacade {

  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
    this.paymentObject = {};
  }

  buildObject(){
    switch (this.type){
      case ORGANIZATION_TYPES.TYPE1:
        return this.buildObjectForType1();
      default:
        return false;
    }
  }

  buildObjectForType1(){
    // return object for organization 1
    this.generateRef(this.payload);
    return this.getObjectFromModal('requestCategory', 'petty_cash');
  }

  getObjectFromModal(modal, code){
    //return database object for code and modal
    console.log('Generate payments object has been started');
    return true;
  }

  generateRef(payload){
    // Generate payment request Ref
  }
}

module.exports = {PaymentObjectBuilderFacade};
