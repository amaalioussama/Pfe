  const mongoose = require('mongoose');
  const chatSchema = new mongoose.Schema({
    userId: {
      type:String,
      ref:"users",
      required:true
    },
    assistantResponse :{
      type : String,
    },
    userInput: {
    type: String,
    required :true
    },
    time: {
      type: Date,
      default: Date.now 
  } });
  const Chat = mongoose.model('chatData' , chatSchema);
  module.exports = Chat;