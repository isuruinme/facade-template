const { ORGANIZATION_TYPES } = require("../constants");

class AuthenticateFacade{
  constructor(req) {
    this.req = req;
  }

  authenticate(){
    const type = this.req.params.organization;
    switch (type){
      case ORGANIZATION_TYPES.TYPE1:
        return this.authenticateType1(type);
      default:
        return this.commonAuthenticate();
    }
  }

  async authenticateType1(type){
    console.log(`Authentication started for ${type}`);
    return true;
  }

  async commonAuthenticate(){

  }
}

module.exports = {AuthenticateFacade};
