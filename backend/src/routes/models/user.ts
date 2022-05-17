var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  bio: String,
  image: String,
  hash: String,
  salt: String
}, {timestamps: true});

const userModel = mongoose.model('User', UserSchema);
export default userModel;