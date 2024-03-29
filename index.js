'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "";
var SKILL_NAME = "Winterfell Facts";
var WELCOME_MESSAGE = "Welcome to Winterfell Facts, I am the maester here at Winterfell, how can I help you now that Winter is here?";
var REPROMPT_MESSAGE = "Would you like to hear a fact? You can say tell me a Winterfell fact or tell me a fact."
var GET_FACT_MESSAGE = "Here's your fact about Winterfell: ";
var HELP_MESSAGE = "You can say tell me a fact, or, you can say tell me a winterfell fact, you can say exit... Winter is here.";
var HELP_REPROMPT = "As the Winterfell Maester, what can I help you with?";
var STOP_MESSAGE = "Winter is here...";
var CANCEL_MESSAGE = "Well I thought you wanted to hear a fact. Anyways, Winter is here...";
var data = [
    "Winterfell is the ancient seat of house stark.",
    "Winter fell was built over eight thousand years ago by Brandon the builder.",
    "There are small hills and valleys within the walls of Winterfell because the ground on which it was built was not leveled.",
    "The castle is defended by a pair of walls, the older inner walls and the newer outer walls.",
    "Beneath the castle of Winterfell there are crypts filled with the dead lords of Winterfell and kings of the north.",
    "Ned Stark was the former lord of Winterfell until tragedy befell him.",
    "Winterfell was founded during the age of heroes.",
    "The religion of Winterfell is the religion of the old gods.",
    "Winterfell is located in the center of the northernmost province of the Seven Kingdoms.",
    "Winterfell was not originally planned as a single structure.",
    "The oldest part of Winterfell was built after the Andals arrived in the Seven Kingdoms.",
    "Winterfell is the regional capital of the North",
    "Harvest feasts have been hosted in Winterfell for centuries."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', WELCOME_MESSAGE, REPROMPT_MESSAGE);
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', CANCEL_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
