const mongoose = require('mongoose');
const employees = require('./employees');
mongoose.Promise = Promise;
mongoose.set("debug", true);

mongoose.connect('mongodb://localhost/employee', {
    keepAlive: true,
    useNewUrlParser: true
}, (err) => {
    if(err) console.log("Error in DB")
    else console.log("DB up and running")
});


module.exports.Employees = employees;