var mongoose = require('mongoose');
var config=require('./config');

mongoose.connect(config.dbUrl);
exports.mongoose=mongoose;

//basic information schema

var basicSchema = mongoose.Schema({
  createDate: {
    type: Date,
    default: Date.now
  },
  time:String,
  pictureId: String,
  ReasonofEnquire:String,
  StudentName:String,
  ParentName:String,
  Parentmobile:String,
  SeekingAdmission:String,
  DOB:Date,
  Address: String,
  Mobileno:Number,
  Email:String,
  refferedId:Number,
  College:String,
  occuption:String,
  totalfee: Number,
  discountfee:Number,
  finalfee:Number,
  Course:String,
  createDate: {
    type: Date,
    default: Date.now
  }
  },
{strict:false}
)

exports.Basic = mongoose.model('Basic',basicSchema,'basic');


