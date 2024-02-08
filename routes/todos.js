const express = require('express');
const log4js = require('log4js');
const process = require('process');
const router = express.Router();

const logger = log4js.getLogger("node-todo.routes.todos");
logger.level = process.env.LOG_LEVEL;

router.post('/', function(req, res, next) {
  logger.debug("Some debug messages");
  logger.debug("Creating a todo...");
  logger.debug(req.body);
  res.send({ method: 'POST',
             route: '/todos',
             node_env: process.env.NODE_ENV,
             log_level: process.env.LOG_LEVEL,
             data: "hello"});
});

module.exports = router;
