const express = require('express');
const bodyParser = require('body-parser');

const usersInterestsRouter = express.Router();

const { UsersInterestsController } = require('../controllers');

usersInterestsRouter.use(bodyParser.json());

usersInterestsRouter.route('/')
  .get((req, res) => (new UsersInterestsController(req, res)).getAction())
  .post((req, res) => (new UsersInterestsController(req, res)).postAction())
  .delete((req, res) => (new UsersInterestsController(req, res)).deleteAction());

module.exports = usersInterestsRouter;
