const express = require("express");
const router = express.Router();
const data = require("../data");
const subjectData = data.subjectDetails;
const assignmentData = data.allAssignments;
const subjects = data.allSubjects;


router.get("/",(req,res) => {
    
    
});

router.post("/",(req,res) => {

    let unm = req.body.loginunm;
    let pwd = req.body.loginpwd;

    
    subjectData.getSubjectById(unm)
    .then((mySubject) => {
        let allSub = [];
        for(let i = 0; i<mySubject.subject.length; i++)
        {
            allSub.push(subjects.getSubjectById(mySubject.subject[i]).then())
        };
        return Promise.all(allSub).then((sub) => {
            return [mySubject,sub];
        });
    }).then((list) => {
        assignmentData.getAllAssignments()
        .then((myAssignment) => {
            res.render("dashboard",{
            sub : list[1],
            myAssignment : myAssignment
        })
        })
        
    })

    

    
})

module.exports = router;