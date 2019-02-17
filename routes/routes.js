const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fulfillment = require('../controllers/botcontroller.js');

require('dotenv');

module.exports ={
    bot: async(app)=>{
        app.use(bodyParser.json());

        app.get('/bot', (req, res)=>{
            res.send('hello from chime')
        });
        
        app.post('/bot', (request, response) =>{
            fulfillment.dialogflowFirebaseFulFillment(request, response);
        });
    },
    html: async(app)=>{
        app.get('/', (req, res)=>{
            res.sendFile(path.join(`${__dirname}/../views/index.html`));
        })
        app.get('/policy', (req, res)=>{
            res.sendFile(path.join(`${__dirname}/../views/policy.html`));
        });
    }

};