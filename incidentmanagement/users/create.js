'use strict';

//const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
//  const timestamp = new Date().toJSON();
  const data = JSON.parse(event.body);
/*
  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item.',
    });
    return;
  }
*/
  const params = {
    TableName: process.env.USERS_DYNAMODB_TABLE,
    Item: {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password,
    },
  };

  // write the todo to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin" : "*" },
        body: 'Couldn\'t create the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin" : "*" },
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};


