const mongoCollections = require("../config/mongoCollections");
const assignments = mongoCollections.assignments;
const uuid = require("node-uuid");

let exported_methods = {

    getAllAssignments(){
        return assignments().then((data) => {
            return data.find({}).toArray()
            .then((myData) => {
                if(!myData)
                throw "data not found"
                return myData
            })
        })
    },
    getAssignmentById(id){
        return assignments().then((data) => {
            return data.findOne({_id : id})
            .then((mydata) => {
                if(!mydata){
                    throw "data not found";

                }
                return mydata;
            });
        });
    },

    addAssignmentsDetails(type,subject,start,end,time){
       
                

        return assignments().then((assignmentsCollection) => {
            newassignments = {
                _id : uuid.v4(),
                type : type,
                subject : subject,
                start : start,
                end : end,
                time : time
              
            };
            return assignmentsCollection
            .insertOne(newassignments)
            .then((newInfo) => {
                return newInfo.insertedId;
            })
            .then((newassignmentsId) => {
                return this.getAssignmentById(newassignmentsId);
            });
        });
                
    
}
}

module.exports = exported_methods;
