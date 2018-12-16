const express = require('express');
const bodyParser = require('body-parser');
const models = require('../models');

const interestsRouter = express.Router();

const { InterestsController } = require('../controllers');

interestsRouter.use(bodyParser.json());

interestsRouter.route('/')
  .get((req, res) => (new InterestsController(req, res)).getAction());


module.exports = interestsRouter;
