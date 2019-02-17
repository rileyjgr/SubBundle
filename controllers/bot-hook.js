const { google } = require("googleapis");
const mongoose = require('mongoose');
const axios = require('axios');

require('dotenv').config();

module.exports = {

    // check whether user has enough money to buy a certain product
    afford: async(agent)=>{
        console.log(agent.parameters);
        const amount = agent.parameters.number;
        console.log(amount);
        const item = agent.parameters.item;
        const userAllocation = agent.parameters.categories;

        const userAllocatedBalance = 100;
        let userRemainingBalance = userAllocatedBalance - amount;

        let booleanValue = Boolean;
        
        if(userRemainingBalance > 0){
            booleanValue = true;
        } else {
            booleanValue = false
        }
        switch(booleanValue){
            case true:
                agent.add('You can afford your '+ item + '. But please note your total ' + userAllocation + 'balance will be ' + userRemainingBalance + ' dollars.');
                break;
            case false:
                agent.add('You can not afford ' + item +'. Your total remaining balance for ' + userAllocation +' is only ' + userAllocatedBalance+ ' dollars.');
                break;
        }

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
        

        let userName = '';
        let userBalance = 0;
        let userAllocatedBalance = 0;

        // get call for user information
        // axios.get('');
        
        // need ot add in functionality to get data from ml and respond back with given amounts

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
    upcomingPayments: async(agent)=>{
        console.log(agent.parameters);

        let userUppcommingTranscations = [
        ]
        

        // axios.get('');
        // need to add functionality to respond back what previous payments the user had

        agent.add('You have 3 Subscriptions coming up on 2/18/19. Hulu, Netflix, and Amazon Prime. Totalling $32.00');

    },
    capitalOneAccount: async(agent)=>{
        console.log(agent.parameters);

        const first_name = agent.parameters.name;
        const last_name = 'Mr. Budget';

        const address = agent.parameters.address;
        const st = 'tx';
        const zip = agent.parameters.zip;

        const data = {
            "first_name": first_name,
            "last_name": last_name,
            "address": {
                "street_number": '0',
                "street_name": address,
                "city": "Dallas",
                "state": st,
                "zip": zip
            }
        }

        const capital_one_api_key = process.env.CAPITAL_ONE_API;
        await axios({
            method: 'post',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            url: 'http://api.reimaginebanking.com/customers?key='+capital_one_api_key,
            data: data
        }).then((resp)=>{
            console.log(resp.data);
            console.log(resp.data.objectCreated._id)
            const user_id = resp.data.objectCreated._id;
            agent.add('Your account has been created and your id is: ' + user_id);
            
        }).catch((err)=>{
            agent.add('Something went wrong please try again later.');
        });

        
    },
    spent: async(agent)=>{
        console.log(agent.parameters);

        let userAllocation = agent.parameters.categories;
        let userAmmount = 0;
        let userTotal = 100;
        switch(userAllocation){
            case 'food':
            // userAmmount = 50;
            agent.add('You spent' + userAmmount + 'dollars on food this month.'+  ' Your total remaining balance for food is: ' + userTotal + ' dollars');
            break;
        case 'misc': 
            agent.add('You spent' + userAmmount + 'dollars on useless stuff this month.'+ ' Your total remaining balance for everything else is: ' + userTotal + ' dollars');
            break;
        case 'gas':
            agent.add('You spent' + userAmmount + 'dollars on gas this month.'+ ' Your total remaining balance for gas is: ' + userTotal + ' dollars');
            break;
        case 'total':
            agent.add('You spent' + userAmmount + 'dollars on all your purchases this month.'+ ' Your total remaining balance is: ' + userTotal + ' dollars');
            break;

        case 'subscriptions':
            agent.add('You spent' + userAmmount + ' on subscriptions this month.'+  ' Your total remaining balance for subscriptions is: ' + array.Subscriptions + ' dollars');
            break;

        case '':
            agent.add(array.name + '. Please ask about a certain category. Your choices include subscriptions, gas, food, misc, and total balance');
        }
    },
    salary: async(agent)=>{
        console.log(agent.parameters);

        let userSalary = agent.parameters.amount;
        
        let trueFalse = Boolean;

        if(isNaN(userSalary)){
            trueFalse = false;
        } else {
            trueFalse = true;
        };

        switch(trueFalse){
            case true:
                agent.add('Thank you for updating your salary.');
                break;
            case false:
                agent.add('That is not a number. Please give me a number.');
                break;
        }
    }
};

