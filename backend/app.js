const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const contactRoutes = require('./routes/contactRoute');

const db = require('./db');

const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
  // Set CORS headers so that the React SPA is able to communicate with this server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/contactsave', (req , res) => {
   const body = {
     name : req.body.name ,
     email : req.body.email ,
     phone : req.body.phone,
     message : req.body.message
   }
   console.log("Name : " + body.name);
   console.log("Email : " + body.email);
   console.log("Phone :" + body.phone);
   console.log("Message " + body.message);

   //Write the mongo code to save to database
   db.getDb()
      .db()
      .collection('contactData').insertOne(body).then((result)=> {
    console.log("Result : " + result);
    res.status(200).send();
    console.log("Data save successfull");
   }).catch((error) => {
     console.log("Error : " + error);
     res.status(500).send();
     console.log("Data save failed");
   })
   //Write the mongo code to save to database End
   
   res.status(200).send();
   console.log("Backend successfull");
});

db.initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(3100);
    console.log("Started db server at 3100");
  }
});
