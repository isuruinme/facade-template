const { ORGANIZATION_TYPES } = require("../constants");

class BillUploaderFacade{
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }

  uploadBills(){
    switch (this.type){
      case ORGANIZATION_TYPES.TYPE1:
        return this.type1BillUpload(this.payload);
      default:
        return this.commonBillUpload();
    }
  }

  type1BillUpload(){
    console.log('Bill upload has been started');
    this.uploadToS3();
    return true;
  }

  commonBillUpload(){
    this.uploadToS3();
  }

  uploadToS3(){
    //Upload to aws s3
  }
}

module.exports = {BillUploaderFacade};
