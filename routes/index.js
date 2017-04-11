const loginRoutes = require("./loginDetails");
 const personalRoutes = require("./personalDetails");
 const subjectRoutes = require("./subjectDetails");
 const homeRoutes = require("./home");
 const dashboardRoutes = require("./dashboard");
 const tempRoutes = require("./dashboard2");
const path = require("path");

let constructorMethod = (app) => {
     app.use("/loginDetails",loginRoutes);
     app.use("/personalDetails",personalRoutes);
     app.use("/subjectDetails",subjectRoutes);
     app.use("/",homeRoutes);
     app.use("/dashboard",dashboardRoutes);
     app.use("/dashboard2",tempRoutes)
     app.use("/home",homeRoutes);
}

module.exports = constructorMethod;