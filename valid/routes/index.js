


const express = require('express');
const router = express.Router();
 const  mongo=require('mongodb')
 const assert=require('assert');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');




// login ppage 
router.get('/',(req,res)=> res.render('login'));


//  Mongo.connect('mongodb://Sudeep36:sant0551@ds149616.mlab.com:49616/rummy', function(err, db) {

    




  router.get('/admin', function(req, res, next) {
    var resultArray = [];
    mongo.connect( 'mongodb://Sudeep36:sant0551@ds149616.mlab.com:49616/rummy', function(err, db){
      assert.equal(null, err);
      var cursor = db.collection('users').find();
      cursor.forEach(function(doc, err){
        assert.equal(null, err);
        resultArray.push(doc);
      }, function(){
      
        db.close();
        res.send({items: resultArray});
      });
    });
  });

router.get('/', ensureAuthenticated,(req, res)=>


res.render('admin',{
    user:req.user

}));






 















module.exports = router;