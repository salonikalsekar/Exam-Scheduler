const mongoCollections = require("../config/mongoCollections");
const login = mongoCollections.login;
const uuid = require("node-uuid");

let exportedMethods = {

    getLoginById(id){
        return login().then((data) => {
            return data.findOne({_id : id})
            .then((mydata) => {
                if(!mydata){
                    throw "data not found";

                }
                return mydata;
            });
        });
    },

    addLoginDetails(unm,pwd,secq,seca){
           
                
                
                        return login().then((loginCollection) => {
                newLogin = {
                _id : unm,
                pwd : pwd,
                secq : secq,
                seca : seca,
              
            };
            return loginCollection
            .insertOne(newLogin)
            .then((newInfo) => {
                return newInfo.insertedId;
            })
            .then((newLoginId) => {
                return this.getLoginById(newLoginId);
            });
        });
    }
}
                
                


        
    
    
    

module.exports = exportedMethods;