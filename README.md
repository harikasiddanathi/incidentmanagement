## incidentmanagement
To create, update and list incidents along with login and register to the site enabled.

# Pre-requisites
Install serverless: ```npm install -g serverless```

To upload front end ui scripts to s3: ```npm install --save serverless-finch```

To execute scripts: ```npm install --save serverless-plugin-scripts```

# Setup
To deploy all lambda functions, api gateway and dynamodb tables: ```serverless deploy```

To replace API_ID in ui scripts of api gateway generated: ```serverless replace```

To finally upload ui front end scripts to s3: ```serverless client deploy```
