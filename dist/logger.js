"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const bunyan = require("bunyan");
exports.logger = bunyan.createLogger({ name: 'people-app' });
