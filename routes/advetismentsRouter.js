const express = require('express');
const bodyParser = require('body-parser');

const advetismentsRouter = express.Router();

const { AdvetismentsController } = require('../controllers');

advetismentsRouter.use(bodyParser.json());

advetismentsRouter.route('/')
  .get((req, res) => (new AdvetismentsController(req, res)).getAction())
  .post((req, res) => (new AdvetismentsController(req, res)).postAction())
  .put((req, res) => (new AdvetismentsController(req, res)).putAction());

module.exports = advetismentsRouter;
