'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const bot = require('./bot-hook');

require('dotenv').config();

exports.dialogflowFirebaseFulFillment = functions.https.onRequest((request, response)=>{
    const agent = new WebhookClient({request, response});
    let intentMap = new Map();

    // intent mapping
    
    intentMap.set('afford', bot.afford);
    intentMap.set('balance', bot.balance);
    intentMap.set('capitalOneAccount', bot.capitalOneAccount);
    intentMap.set('spent', bot.spent);
    intentMap.set('salary', bot.salary);
    intentMap.set('upcomingPayments', bot.upcomingPayments);

    agent.handleRequest(intentMap);

});