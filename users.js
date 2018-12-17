var express = require('express')

const bodyParser = require('body-parser') 

var router = express.Router()

const db = require('./dbconnection')

router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

router.post('/', function(req, res) {

    let formData = req.body;
    
    db.execute("Insert into user_data (firstname,lastname,email) values('" + formData['firstname'] + "','" + formData['lastname'] + "','" + formData['email'] + "')") 
    .then(result => {
      console.log("Query inserted successfully")
    })
    .catch(err => {
        console.log(err)
    })
    
    db.execute("select * from user_data",function(err,results){
        if(err) throw err

        res.render("user_list",{data: results})

    })

});

router.get('/',function(req,res,next){
  
    db.execute("select * from user_data",function(err,results){
        if(err) throw err

        res.render("user_list",{data: results})

    })

})

module.exports = router