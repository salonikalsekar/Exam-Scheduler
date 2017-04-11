const express = require("express");
const router = express.Router();
const data = require("../data");
const loginData = data.loginDetails;


router.get("/",(req,res) => {
    res.render("loginDetails");
});

// router.post('/loginDetails',(req,res)=>{
//     //insert subject details in the database
//     res.render("loginDetails");

// });

// router.post("/personalDetails",(req,res) => {

//     let unm = req.body.unm;
//     let pwd = req.body.pwd;
//     let secq = req.body.secq;
//     let seca = req.body.seca;
   
//     loginData.addLoginDetails(unm, pwd, secq, seca)
//     .then((newFaculty) => {
//         res.render("personalDetails",{
//             unm : unm
//         });
//         console.log("saved to database");
//     }).catch((e)=>{
//         res.status(500).json({error : e});
//     });
// });
module.exports = router;