const models = require('../models');
const Controller = require('./Controller');

class InterestsController extends Controller {
  constructor(req, res) {
    super();
    this.req = req;
    this.res = res;
  }

  getAction() {
    const {
      limit, offset, relations, where, order, userId
    } = this.req.urlParams;

    if (userId) {
      return models.UsersInterests.findAndCountAll({
        where: {
          user_id: userId
        }
      }).then((item) => {
        this.response = item.rows;
        this.returnInformation();
      })
    }

    models.Interests.findAndCountAll({
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
    });
  }
}

module.exports = InterestsController;
