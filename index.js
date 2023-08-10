const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
const restaurantapi = require('./routes/restaurantapi')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/database', restaurantapi)

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
  console.log("http://localhost:4000/database/readUser/1234");
})
