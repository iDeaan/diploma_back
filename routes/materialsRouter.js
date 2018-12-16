const express = require('express');
const bodyParser = require('body-parser');

const materialsRouter = express.Router();

const { MaterialsController } = require('../controllers');

materialsRouter.use(bodyParser.json());

materialsRouter.route('/')
  .get((req, res) => (new MaterialsController(req, res)).getAction());


module.exports = materialsRouter;
