const express = require("express");
const router = express.Router();
const data = require("../data");
const assignmentData = data.allAssignments;
const examData = data.allExams;

router.post("/",(req,res) => {

    let type = req.body.type;
    let subject = req.body.subject;
    let start = req.body.start;
    let end = req.body.end;
    let time = req.body.usr_time;

    
        assignmentData.addAssignmentsDetails(type,subject,start,end,time)
    .then((newAssignment) => {
        assignmentData.getAllAssignments()
        .then((myAssignment) => {
            res.render("dashboard",{
                 myAssignment : myAssignment
            })
        })
    }).catch((e) => {
        res.status(500).json({error : e});
    })
})
    
    
    
    
        
       

        // assignmentData.getAllAssignments()
        // .then((myAssignment) => {
        //     res.render("dashboard",{
        //         myAssignment : myAssignment
        //     })
        //     console.log(myAssignment);
        // })



module.exports = router;