'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const bot = require('./bot-hook');

require('dotenv').config();

exports.dialogflowFirebaseFulFillment = functions.https.onRequest((request, response)=>{
    const agent = new WebhookClient({request, response});
    let intentMap = new Map();
    
    intentMap.set('test', bot.test);
    intentMap.set('test2', bot.test2);
    intentMap.set('balance', bot.balance);
    intentMap.set('upcommingPayments', bot.payments);
    agent.handleRequest(intentMap);

});