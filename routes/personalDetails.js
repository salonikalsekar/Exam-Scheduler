const express = require("express");
const router = express.Router();
const data = require("../data");
const loginData = data.loginDetails;
const bcrypt = require("bcrypt-nodejs");


    let unm = " ";
    let pwd = " ";
    let secq = " ";
    let seca = " ";
    let conpwd = " ";

  router.post("/",(req,res) => {
     unm = req.body.unm;
     pwd = req.body.pwd;
     conpwd = req.body.conpwd;
     secq = req.body.secq;
     seca = req.body.seca;
    
    //const hash = bcrypt.hashSync(pwd);
    
        
       

        let myHashedPassword = hashedPassword(pwd); 
        myHashedPassword.then((myhash) => {
        
        loginData.addLoginDetails(unm, myhash, conpwd,secq, seca)
        .then((newFaculty) => {
        res.render("personalDetails",{
            unm : unm
        })
        console.log("saved to database");
        }).catch((e)=>{
        res.render("loginDetails",{
            error : e
        })
        })
        })
    
        
  })
    
   //console.log(myHashedPassword);
    
    

    let hashedPassword = function(pass){
      return new Promise((resolve,reject) => {
          bcrypt.hash(pass, null, null, function (error, hash) {
        if (error) {
            reject(error);
        } else {
            resolve(hash);
        }
        });
      });
      
  }
    



 module.exports = router;