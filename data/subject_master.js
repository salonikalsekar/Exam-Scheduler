const mongoCollections = require("../config/mongoCollections");
const subjects = mongoCollections.subject

let exported_methods = {

    getSubjectById(id){
        return subjects().then((allSub) => {
            return allSub.findOne({_id : id})
            .then((sub) => {
                console.log(sub);
                if(!sub)
                    throw "subject not found";
                    return sub;
                
                
            })
        })
    }
}

module.exports = exported_methods;