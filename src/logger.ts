const bunyan = require("bunyan");

export const logger = bunyan.createLogger({name: 'people-app'});