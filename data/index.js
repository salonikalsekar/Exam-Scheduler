const loginData = require("./loginDetails");
const personalData = require("./personalDetails");
const subjectData = require("./subjectDetails");
const subjectInfo = require("./subject_master");
const assignmentInfo = require("./assignments");
const examInfo = require("./exam")
module.exports = {
    loginDetails : loginData,
    personalDetails : personalData,
    subjectDetails : subjectData,
    allSubjects :  subjectInfo,
    allAssignments : assignmentInfo,
    allExams : examInfo
}