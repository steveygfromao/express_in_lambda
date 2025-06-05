
const AWS = require('aws-sdk');

async function getConnectionString(secretId) {
  AWS.config.update({ region: 'eu-west-1' });
  const client = new AWS.SecretsManager();

  try {
    const { SecretString, SecretBinary } = await client.getSecretValue({ SecretId: secretId }).promise();
    return SecretString || Buffer.from(SecretBinary, 'base64').toString('ascii');
  } catch (error) {
    throw new Error(`Failed to retrieve secret: ${error.message}`);
  }
}

module.exports = { getConnectionString };
