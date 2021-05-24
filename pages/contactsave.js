import React, { useState } from "react";

import ReactGA from "react-ga";

const express = require('express')
const router = new express.Router()

const mongoose = require('mongoose')

var ObjectID = require('mongodb').ObjectID;

export default function ContactSave(props) {
    console.log("Entered successfully");
    mongoose.connect("mongodb://127.0.0.1:27017/cauvery", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false ,
        useUnifiedTopology: true
    })

    const connection = mongoose.connection;
    console.log("Connected successfully");

    try {
        console.log("Started");



        
       
        var user = {
            a: 'abc',
            _id: new ObjectID()
          };

          connection.collection('testingAbc').insert(user);
          connection.close()
       

        console.log("Ended");
    } catch (e) {
      console.log(e);
    }

    return(
        <div>
            <h1>Success</h1>
        </div>
        
    );

   

}