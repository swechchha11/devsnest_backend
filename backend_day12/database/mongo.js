var mongoose = require('mongoose'); 1005.5k (gzipped: 272.5k)
var mongodb = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongodb, {useNewUrlParser: true, UseUnifiedTopology:true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, "Mongodb connection error"));
