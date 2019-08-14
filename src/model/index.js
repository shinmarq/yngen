const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  messengerUserId: { type: String },
  nickName: { type: String },
  description: { type: String },
  personality: { type: [] },
  interest: { type: [] },
  setting: { type: String },
  status: { type: String },
  gender: { type: String },
  createDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: Date.now },
});

exports.Traveller = () => mongoose.model('traveller', UserSchema);
