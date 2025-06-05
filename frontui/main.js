
async function fetchMainEndpoint() {
  try {
    const response = await fetch('https://hlue996n43.execute-api.eu-west-1.amazonaws.com/dev/getsecret');
    const data = await response.json();
    console.log('GET response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMainEndpoint();
