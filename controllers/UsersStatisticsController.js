const models = require('../models');
const Controller = require('./Controller');
const { Sequelize } = require('../models');
const Op = Sequelize.Op;



class InterestsController extends Controller {
  constructor(req, res) {
    super();
    this.req = req;
    this.res = res;
  }

  getAction() {
    const {
      interestId, dataType
    } = this.req.urlParams;

    if (dataType === 'gender') {
      return this.returnGenderInformation();
    }
    if (dataType === 'status') {
      return this.returnStatusInformation();
    }
    if (dataType === 'age') {
      return this.returnAgeInformation();
    }
  }

  returnStatusInformation() {
    const { interestId } = this.req.urlParams;

    models.UsersInterests.findAndCountAll({
      where: {
        interest_id: interestId
      }
    }).then((rows) => {
      const usersIds = rows.rows.map(item => item.user_id).filter(item => item > 0).map(Number);
      models.Users.findAndCountAll({
        where: {
          id: {
            [Op.in]: [...usersIds]
          }
        }
      }).then((users) => {
        const result = users.rows;

        let freeCount = 0;
        let notFreeCount = 0;
        result.map(user => Number(user.marital_status) === 1 ? notFreeCount++ : freeCount++);

        models.Interests.find({
          where: {
            id: interestId
          }
        }).then((interest) => {
          this.response = {
            title: interest.title,
            items: [
              {
                title: 'Зайняті',
                count: notFreeCount
              },
              {
                title: 'Вільні',
                count: freeCount
              }
            ]
          };

          this.returnInformation();
        });
      }).catch((err) => {
        console.log('err', err);
        this.response = err;
        this.returnInformation();
      });
    });
  }

  returnGenderInformation() {
    const { interestId } = this.req.urlParams;

    models.UsersInterests.findAndCountAll({
      where: {
        interest_id: interestId
      }
    }).then((rows) => {
      const usersIds = rows.rows.map(item => item.user_id).filter(item => item > 0).map(Number);
      models.Users.findAndCountAll({
        where: {
          id: {
            [Op.in]: [...usersIds]
          }
        }
      }).then((users) => {
        const result = users.rows;

        let maleCount = 0;
        let femaleCount = 0;
        result.map(user => Number(user.gender) === 1 ? maleCount++ : femaleCount++);

        models.Interests.find({
          where: {
            id: interestId
          }
        }).then((interest) => {
          this.response = {
            title: interest.title,
            items: [
              {
                title: 'Чоловіки',
                count: maleCount
              },
              {
                title: 'Жінки',
                count: femaleCount
              }
            ]
          };
          this.returnInformation();
        });
      }).catch((err) => {
        console.log('err', err);
        this.response = err;
        this.returnInformation();
      });
    });
  }

  returnAgeInformation() {
    const {
      interestId, dataType
    } = this.req.urlParams;

    models.UsersInterests.findAndCountAll({
      where: {
        interest_id: interestId
      }
    }).then((rows) => {
      const result = rows.rows;
      const usersIds = rows.rows.map(item => item.user_id).filter(item => item > 0).map(Number);
      this.response = usersIds;
      models.Users.findAndCountAll({
        where: {
          id: {
            [Op.in]: [...usersIds]
          }
        }
      }).then((users) => {
        const result = users.rows;

        const ageRange = [
          {
            title: '0-10',
            count: 0,
            min: 0,
            max: 10
          },
          {
            title: '10-20',
            count: 0,
            min: 10,
            max: 20
          },
          {
            title: '20-30',
            count: 0,
            min: 20,
            max: 30
          },
          {
            title: '30-40',
            count: 0,
            min: 30,
            max: 40
          },
          {
            title: '40-50',
            count: 0,
            min: 40,
            max: 50
          },
          {
            title: '50-60',
            count: 0,
            min: 50,
            max: 60
          },
          {
            title: '60-70',
            count: 0,
            min: 60,
            max: 70
          },
          {
            title: '70-80',
            count: 0,
            min: 70,
            max: 80
          }
        ];

        result.map(user => {
          const currentRange = ageRange.find(item => user.age > item.min && user.age <= item.max);
          if (currentRange) {
            currentRange.count += 1;
          }
        });

        models.Interests.find({
          where: {
            id: interestId
          }
        }).then((interest) => {
          this.response = {
            title: interest.title,
            items: ageRange
          };
          this.returnInformation();
        });
      }).catch((err) => {
        console.log('err', err);
        this.response = err;
        this.returnInformation();
      })
    });
  }
}

module.exports = InterestsController;
