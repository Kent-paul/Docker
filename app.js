const express = require('express')
const app = express();
const ejs = require('ejs');
const employeesRoute = require('./api/employeesRoute');



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => res.render('index'))

app.use('/api/employees', employeesRoute);





app.listen(3000, () => console.log("SERVER CONNECTED"))
