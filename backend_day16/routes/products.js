const express = require("express");

const products = require('../models/products');
const router = express.Router();
const  {Op} = require( ' sequelize');
const product = require("../models/product");

router.get('/',async (req,res) => {
    try{
       const query = req.query;
       const count = parseInt(query.count) || 10;
       const page = parseInt(query.page) || 1;
       const alter = parseInt(query.after);
       let sql = {};
       if(alter) {
           sql = {
             where: {
                 id:{
                     [Op.gt]: after
                 }
             }
           }
       }

    
 else {
     sql= {
         offset: count * (page-1)
     }
    }
    const product = await product.findAll({
        ...sql,
        attribute: [ "id", "title", "price", "description", "image"],
        limit: count
    });
    res.status(200).send({
        count: product.length,
        items: products
    })
 } catch(err)
     {
    console.log(err);
    res.status(500).send({
        error: err,
        message: "can not process your request"
    })
     }
});

module.exports = router;