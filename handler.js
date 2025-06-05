'use strict';

const serverless = require('serverless-http');
const ExpressHandler = require('./express_setup');
const apiRoutes = require('./routes/api');

module.exports.main = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Dummy handler',
        input: event,
      },
      null,
      2
    ),
  };
};

const express_server = new ExpressHandler();
const app = express_server.getExpress();

//app.use('/api',apiRoutes);  // TODO
// The following below will need moving into th routes/api.js file

app.get('/getsecret', (req, res) => {
  res.json({ message: 'GET secret called from Express. Need to retrieve secret value from aws' });
});

app.post('/getsecret', (req, res) => {
  res.json({ message: 'POST secret called from Express. Need to retrieve secret value from aws', body: req.body });
});

module.exports.main = serverless(app);
