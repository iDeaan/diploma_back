const models = require('../models');
const Controller = require('./Controller');

class UsersInterestsController extends Controller {
  constructor(req, res) {
    super();
    this.req = req;
    this.res = res;
  }

  getAction() {
    const {
      limit, offset, relations, where, order
    } = this.req.urlParams;

    models.UsersInterests.findAndCountAll({
      include: relations,
      offset: Number(offset) || 0,
      limit: Number(limit) || 10,
      where,
      order: order && order.orderData
        ? order.orderFunction(order.orderData, 'Users', models.sequelize) : null
    }).then((users) => {
      this.total = users.count;
      this.response = users.rows;
      this.code = users.count > 0 ? this.code : 404;
      this.returnInformation();
    }).catch((err) => {
      this.response = err;
      this.returnInformation();
    });
  }

  postAction() {
    const {
      userId, interestId
    } = this.req.urlParams;

    models.UsersInterests.create({
      user_id: userId,
      interest_id: interestId
    }).then((response) => {
      this.response = response;
      this.returnInformation();
    }).catch((err) => {
      this.response = err;
      this.returnInformation();
    });
  }

  deleteAction() {
    const {
      userId, interestId
    } = this.req.urlParams;

    models.UsersInterests.destroy({
      where: {
        user_id: userId,
        interest_id: interestId
      }
    })
      .then(() => this.returnInformation())
      .catch((err) => {
        this.response = err;
        this.returnInformation();
      });
  }
}

module.exports = UsersInterestsController;
