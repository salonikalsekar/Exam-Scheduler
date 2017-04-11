const mongoCollections = require("../config/mongoCollections");
const teacher_subject = mongoCollections.teacher_subject;
const uuid = require("node-uuid");

let exportedMethods = {

    getSubjectById(id){
        return teacher_subject().then((data) => {
            return data.findOne({_id : id})
            .then((mydata) => {
                if(!mydata){
                    throw "data not found";

                }
                return mydata;
            });
        });
    },

    addSubjectDetails(unm,branch, semester,subject = []){
        
    
                
                
                               
        
        return teacher_subject().then((subjectCollection) => {
            newSubject = {
                _id : unm,
                branch : branch,
                semester : semester,
                subject : subject            
            };
            return subjectCollection
            .insertOne(newSubject)
            .then((newInfo) => {
                return newInfo.insertedId;
            })
            .then((newSubjectId) => {
                return this.getSubjectById(newSubjectId);
            });
        });
                
    

    }
}
module.exports = exportedMethods;