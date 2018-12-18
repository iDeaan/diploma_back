const express = require('express');
const bodyParser = require('body-parser');

const usersStatisticsRouter = express.Router();

const { UsersStatisticsController } = require('../controllers');

usersStatisticsRouter.use(bodyParser.json());

usersStatisticsRouter.route('/')
  .get((req, res) => (new UsersStatisticsController(req, res)).getAction())

module.exports = usersStatisticsRouter;
