const { PORT = 5000 } = process.env; // get the port from the environment variable, with a default value of 5000
const app = require('./app');

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // start the server listening and console.log that it's listening
