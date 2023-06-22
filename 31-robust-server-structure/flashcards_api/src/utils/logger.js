
const winston = require("winston");

// Create a logger output to "info.log" file
const fileLogger = new winston.transports.File({ filename: "info.log" });
const consoleLogger = new winston.transports.Console({ format: winston.format.simple() });

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [fileLogger],
});

// If running tests, remove file logger and output to console instead
if (process.env.NODE_ENV === "test") {
  logger.remove(fileLogger);
  logger.add(consoleLogger);
  consoleLogger.level = "crit";
}

module.exports = logger;
