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

    models.Advetisments.findAndCountAll({
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
    const { req } = this;
    const bodyParams = req.body;

    models.Advetisments.create(bodyParams)
      .then((response) => {
      this.response = response;
      this.returnInformation();
    }).catch((err) => {
      this.response = err;
      this.returnInformation();
    });
  }

  putAction() {
    const {
      advId
    } = this.req.urlParams;

    models.Advetisments.findOne({
      where: {
        id: advId
      }
    })
      .then((item) => {
        const clicksNumber = Number(item.clicks_number);
        item.clicks_number = clicksNumber + 1;
        item.save();
        this.returnInformation();
      })
      .catch((err) => {
        this.response = err;
        this.returnInformation();
      });
  }
}

module.exports = UsersInterestsController;
