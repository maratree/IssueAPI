"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var company_1 = require("./controller/company");
var user_1 = require("./controller/user");
var customer_1 = require("./controller/customer");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
//get port or if not found port default port 3000 
var port = process.env.PORT || '3000';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/company', company_1.CompanyController);
app.use('/user', user_1.UserController);
app.use('/customer', customer_1.CustomerController);
//Serve the application at the given port
app.listen(port, function () {
    // use ` (windows+changelanguage)
    //Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=D:/Train JS/IssueAPI/server.js.map