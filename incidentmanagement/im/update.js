'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamodb = new AWS.DynamoDB();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  console.log(event.pathParameters);

  // validation
  // if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
  //   console.error('Validation Failed');
  //   callback(null, {
  //     statusCode: 400,
  //     headers: { 'Content-Type': 'text/plain' },
  //     body: 'Couldn\'t update the todo item.',
  //   });
  //   return;
  // }



 var params = {
                    TableName: process.env.DYNAMODB_TABLE,
                    Key: { // a map of attribute name to AttributeValue for all primary key attributes
                        'uid': { S: event.pathParameters.id }
                    },
                    AttributeUpdates: {
                        description: {
                            Action: 'PUT',
                            Value: { /* AttributeValue */
                                S: data.description,
                            }
                        },
                        name: {
                            Action: 'PUT',
                            Value: { /* AttributeValue */
                                S: data.name,
                            }
                        },
                        component: {
                            Action: 'PUT',
                            Value: { /* AttributeValue */
                                S: data.component,
                            }
                        },
                        priority: {
                            Action: 'PUT',
                            Value: { /* AttributeValue */
                                S: data.priority,
                            }
                        },
                        
                    },
                };
                dynamodb.updateItem(params, function(error, result) {
               if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
            });

};

