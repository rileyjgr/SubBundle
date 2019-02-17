# Mr. Budget

Mr. Budget is an open source chat bot to be used to help with budget planning. 

## Getting Started

To install Mr. Budget on your local machine

Step 1: 

```
git clone https://github.com/rileyjgr/SubBundle
cd subbundle
npm install
npm start
```

You can also run:  
```
npm run dev
```
If you like to use nodemon

Step 2: 

Make sure you have ngrok or a similar program installed. 
If you do not please check out: 
- [ngrok](https://ngrok.com/). 
- [ngrokDocs](https://ngrok.com/docs)
 
Step up an http server to port 3000. You can change the port in server.js to whatever you prefer

Step 3: 

Navigate to [Dialogflow](https://dialogflow.com/) and create an account and set up a project.

Dialogflow's documentation is put together very well, it can be found [here](https://dialogflow.com/docs)

Step 4: 

After you have your http server running with ngrok and you have a second window running the node server. Go to the fulfillment tab in and enable Webhook. As the url input

```
*YOURNGROKLINKHERE.ngrok.io/bot
```

Step 5 (optional):

If you are interested in looking at our NLP models they can be found under the models folder. This zip file is also able to be imported into dialogflow. It is our basic Hackathon demo version, and will be updated as more functionallity is added.

## Running the tests

To run test you can access the dialogflows integration panel, and select Google Assistant ==> test.

## Authors

* **Riley Griffin** - *Various bot functions* - [Rileyjgr](https://github.com/rileyjgr) - [Website](http://rileygriffin.com)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
