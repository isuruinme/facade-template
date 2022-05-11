const { ORGANIZATION_TYPES } = require("../constants");

class PaymentBodyValidator{

  constructor(requestBody,type = null) {
    this.requestBody = null;
    this.type = type;
  }

  validate(){
    switch (this.type){
      case ORGANIZATION_TYPES.TYPE1:
        return this.validateByType1(this.requestBody);
      default:
        this.defaultValidate(this.requestBody);
    }
  }

  validateByType1(requestBody){
    // validate request body by organization
    console.log('validate body has been started');
    return true;
  }

  defaultValidate(requestBody){
    // default request body validation if the organization is undefined
  }
}

module.exports = {PaymentBodyValidator};
