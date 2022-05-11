const {PaymentSaveFacade} = require("../facade/PaymentSave.facade");
const { PaymentBodyValidator } = require("../facade/PaymentBodyValidator");
const { PaymentObjectBuilderFacade } = require("../facade/PaymentObjectBuilder.facade");
const { BillUploaderFacade } = require("../facade/BillUploader.facade");
const { WorkflowBuilderFacade } = require("../facade/WorkflowBuilder.facade");

class PaymentRequestInterface{
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }

  async generatePaymentRequest(){
    try {
      console.log('')
      const requestBodyValidator = new PaymentBodyValidator(this.payload, this.type);
      await requestBodyValidator.validate();

      console.log(`Request body validation has been finished for ${this.type} \n`)

      const paymentObjectBuilder = new PaymentObjectBuilderFacade(this.type, this.payload);
      await paymentObjectBuilder.buildObject();

      console.log(`Object builder has been finished for ${this.type} \n`)

      const billUploader = new BillUploaderFacade(this.type, this.payload);
      await billUploader.uploadBills();

      console.log(`Upload bills have been finished for ${this.type} \n`)

      const workflowBuilder = new WorkflowBuilderFacade(this.type, this.payload);
      await workflowBuilder.workflowBuilder();

      console.log(`Workflow has been build ${this.type} \n`)

      const newPayment = new PaymentSaveFacade(this.type, this.payload);
      await newPayment.savePayment();
      console.log(`Payment has been saved ${this.type}\n`)
      return true;
    }catch (e) {
      return false;
    }
  }
}

module.exports = {PaymentRequestInterface};
