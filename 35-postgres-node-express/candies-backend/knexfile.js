require('dotenv').config()
const { DATABASE_URL } = process.env;

// Update with your config settings.
module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
  },
};