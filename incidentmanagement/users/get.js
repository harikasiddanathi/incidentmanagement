'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: process.env.USERS_DYNAMODB_TABLE,
    Key: {
      username: event.pathParameters.username,
    },
  };

  // fetch todo from the database
  dynamoDb.get(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todo item.',
      });
      return;
    }
    var response = {};
    if (JSON.stringify(result.Item)){
console.log(JSON.stringify(result.Item));
    // create a response
     response = {
      statusCode: 200,
     
      body: JSON.stringify(result.Item),
    };}
    else {
     response = {
      statusCode: 200,
     
      body: "notpresent",
    };
    }
    callback(null, response);
  });
};

