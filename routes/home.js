const express = require("express");
const router = express.Router();
const data = require("../data");
const subjectData = data.subjectDetails;


router.get("/",(req,res) => {
    res.render("home");
});

router.post("/home",(req,res) => {

    let unm = req.body.unm;
    let branch = req.body.branch;
    let semester = req.body.semester;
    let subject = req.body.subject;

    subjectData.addSubjectDetails(unm,branch,semester,subject)
    .then((newSubject) => {
        res.render("home");
        console.log("subject saved to database");

   
    }).catch((e) => {
        res.render("subjectDetails",{
            error : e
        })
    });
}
)

    





module.exports = router



