const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());



mongoose.connect("mongodb+srv://gourav-pundir:7HztUn9Bz3zFfxDT@cluster0.tnf1yk0.mongodb.net/gourav-22", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route)

app.use((req, res) => {
    res.status(400).send({ status: false, error: "Enter proper Url" });
  });

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});