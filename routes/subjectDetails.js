 const express = require("express");
 const router = express.Router();
const data = require("../data");
 const personalData = data.personalDetails;

 router.post("/",(req,res) => {
    //console.log(req.body)
    let fnm = req.body.fnm;
    let lnm = req.body.lnm;
    let doj = req.body.doj;
    let contact = req.body.contact;
    let unm = req.body.unm;
    
    personalData.addFaculty(unm,fnm,lnm,doj,contact)
    .then((newFaculty) => {    
        res.render("subjectDetails" , {
            unm : unm
        });
        console.log("saved to database");
    }).catch((e)=>{
        res.render("personalDetails",{
            error : e
        })
    });
});


module.exports = router;