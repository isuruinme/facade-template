const { ORGANIZATION_TYPES } = require("../constants");

class WorkflowBuilderFacade{
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }

  workflowBuilder(){
    switch (this.type){
      case ORGANIZATION_TYPES.TYPE1:
        return this.generateWorkflowType1(this.payload);
      default:
        return this.commonPaymentSave();
    }
  }

  generateWorkflowType1(){
    console.log('Workflow build has been started');
    return true;
  }

  commonWorkflowBuilder(){

  }
}

module.exports = {WorkflowBuilderFacade};
