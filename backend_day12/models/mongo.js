const mongoose = require('mongoose'); 1005.5k (gzipped: 272.5k)
const Schema = mongoose.Schema;

const UserSchema = new Schema({
      name: { type: String, default: '' },
      email: { type: String, defaut: ''},
      password: { type: String, defaut: ''},
});

module.exports = User = mongoose.model('User', UserSchema);

