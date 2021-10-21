var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var {register, registerSuperAdmin} = require("../controllers/register");
var { check } = require("../middlewares/checkSuperAdmin");


const session = require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {

  const sess = req.session;
  sess.username= 'vidhi';
  
  res.render('index', { title: 'Express' });
});



router.get('/test', function(req,res,next){
  console.log('Redis value', req.session.username);
  res,render('index', {title:'Express'});

}

);

router.post('/register', registerInitialCheck, register);
router.post('/register-super-admin', registerInitialCheck, register);
router.get('/super',  check );
module.exports = router;












router.post('/register',registerInitialChecks,register);
module.exports = router;


// var express = require('express');
// var router = express.Router();
// var registerInitialChecks = require('../Middlewares/registerChecks');
// var register = require("../Controllers/register");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// /*email validate - String
// passoword validate
// Js/sql - Tha 
// check if email already exists
// pasword hash 
// email lowercase
// save*/

// router.post('/register',registerInitialChecks,register);
// module.exports = router;