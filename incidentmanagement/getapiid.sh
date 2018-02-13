echo $1
API_ID=`aws apigateway get-rest-apis --query "items[?name == '${1}'].id" --region us-east-1 --output text`
find client/dist -type f -exec sed -i "s/apiid/${API_ID}/g" {} +
