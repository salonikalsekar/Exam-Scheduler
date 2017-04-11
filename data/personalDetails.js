const mongoCollections = require("../config/mongoCollections");
const teacher_master = mongoCollections.teacher_master;
const uuid = require("node-uuid");

let exportedMethods = {

    getFacultyById(id){
        return teacher_master().then((faculty) => {
            return faculty.findOne({_id : id})
            .then((myFaculty) => {
                if(!myFaculty){
                    throw "Faculty not found";

                }
                return myFaculty;
            });
        });
    },
       
addFaculty(unm,fnm,lnm,doj,contact){
            
                
               
                
                
        return teacher_master().then((loginCollection) => {
           var   newFaculty = {
                _id :unm,
                firstName : fnm,
                lastName : lnm,
                date_of_joining : doj,
                contact : contact,
                
            };
            return loginCollection
            .insertOne(newFaculty)
            .then((newInfo) => {
                return newInfo.insertedId;
            })
            .then((newLoginId) => {
                return this.getFacultyById(newLoginId);
            });
        });
                
}
}

module.exports = exportedMethods;