const mongoCollections = require("../config/mongoCollections");
const exams = mongoCollections.exams;
const uuid = require("node-uuid");

let exported_methods = {

    getAllExams(){
        return exams().then((data) => {
            return data.find({}).toArray()
            .then((myData) => {
                if(!myData)
                throw "data not found"
                return myData
            })
        })
    },
    getExamById(id){
        return exams().then((data) => {
            return data.findOne({_id : id})
            .then((mydata) => {
                if(!mydata){
                    throw "data not found";

                }
                return mydata;
            });
        });
    },

    addExamsDetails(type,subject,start,end,time){
       
                

        return exams().then((examsCollection) => {
            newexams = {
                _id : uuid.v4(),
                type : type,
                subject : subject,
                start : start,
                end : end,
                time : time
              
            };
            return examsCollection
            .insertOne(newexams)
            .then((newInfo) => {
                return newInfo.insertedId;
            })
            .then((newexamsId) => {
                return this.getExamById(newexamsId);
            });
        });
                
    
}
}

module.exports = exported_methods;
