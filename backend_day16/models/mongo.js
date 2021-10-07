// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//       name: { type: String, default: '' },
//       email: { type: String, defaut: ''},
//       password: { type: String, defaut: ''},
//       role: {type: String, default: ' user' }
// });

// module.exports = User = mongoose.model('User', UserSchema);


const { Schema, model} = require("mongoose");
const UserSchema = new Schema (
      {
            name: {
                  type:String,
                  required: true
            },
            email: {
                  type:String,
                  required: true
            },
            role: {
                  type:String,
                  required: "user",
                  enum: ["user", "admin", "superadmin"]
            },
            username: {
                  type:String,
                  required: "user"
      
            },
            password: {
                  type: String,
                  required: true
            }
      },
      {timestamps: true }
      

);
module.exports = model("users", UserSchema);