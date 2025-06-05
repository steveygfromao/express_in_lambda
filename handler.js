'use strict';

const serverless = require('serverless-http');
const ExpressHandler = require('./express_setup');
const apiRoutes = require('./routes/api');
const { getConnectionString } = require('./services/secretsService'); 

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

app.get('/getconnectionstring', async (req, res) => {
  try {
    const secret = await getConnectionString('ao.lastmile.hhtdashboard.crewupdates_env');
    res.json({ message: secret });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports.main = serverless(app);
