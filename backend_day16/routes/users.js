var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool;

const pool = new Pool ({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password:'1234',
  port:5432
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM "Users" where id=$1 and email=$2',[req.query.id , req.query.email], (err,result) => {
    if(err){
      throw err;

    }
    res.status(200).json(result);

  })
  res.send('respond with a resource');
});

module.exports = router;
