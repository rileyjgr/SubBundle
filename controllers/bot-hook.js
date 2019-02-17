const {google} = require("googleapis");
const mongoose = require('mongoose');
const axios = require('axios');

require('dotenv').config();

module.exports = {

    // check whether user has enough money to buy a certain product
    afford: async(agent)=>{

    },

    // check balance on given query
    balance: async(agent)=>{
        const array = 
            {
            'name': 'Riley',
            'totalBalance': 1000,
            'food': 100,
            'gas': 20,
            'Subscriptions': 100,
            'misc':20
            };

        const query = agent.parameters.categories;
        console.log(query);

        // switch case to handle each category
        switch(query){
            case 'food':
                agent.add('Hello, ' +array.name + '.' + ' Your total remaining balance for food is: ' + array.food + ' dollars');
                break;
            case 'misc': 
                agent.add('Hello, ' +array.name + '.' + 'Your total remaining balance for everything else is: ' + array.misc + ' dollars');
                break;
            case 'gas':
                agent.add('Hello, ' +array.name + '.' + 'Your total remaining balance for gas is: ' + array.gas + ' dollars');
                break;
            case 'total':
                agent.add('Hello, ' +array.name + '.' + ' Your total remaining balance is: ' + array.totalBalance + ' dollars');
                break;

            case 'subscriptions':
                agent.add('Hello, ' +array.name + '.' + ' Your total remaining balance for subscriptions is: ' + array.Subscriptions + ' dollars');
                break;
            case '':
                agent.add(array.name + '. Please ask about a certain category. Your choices include subscriptions, gas, food, misc, and total balance');
            }

    },
    payments: async(agent)=>{

    },
    spent: async(agent)=>{

    },
    salary: async(agent)=>{

    }
};

