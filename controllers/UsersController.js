const models = require('../models');
const elasticsearch = require('elasticsearch');
const unirest = require('unirest');
const Controller = require('./Controller');
const { categoriesList } = require('../helpers/generateModelData')

let promisesResponses = [];

const returnData = (postsList) => {
  return new Promise((resolve) => {
    unirest.post('https://twinword-text-classification.p.mashape.com/classify/')
      .header('X-Mashape-Key', 'aJu88wbXJ3mshFpVQmQABJpApWESp1fs5mMjsnmWct6jjrI86u')
      .header('Content-Type', 'application/x-www-form-urlencoded')
      .header('Accept', 'application/json')
      .send(`text=${postsList}`)
      .end((result) => {
        promisesResponses.push(result.body.categories[0]);
        resolve(result.body);
      });
  });
};

const returnClassifiedItem = (categoriesList, promisesResponses) => {
  promisesResponses.forEach(item => {
    const catName = item.toLowerCase()
    const currentItemCategory = categoriesList.find(category => catName.includes(category.value.toLowerCase()))
    if (currentItemCategory) {
      currentItemCategory.times += 1;
    }
  });
  const sorted = categoriesList.sort((first, second) => second.times - first.times);
  return {
    top_1: sorted[0].value,
    top_2: sorted[1].value,
    top_3: sorted[2].value
  };
};

const calculateAverageWordsAndLikes = (posts) => {
  const words = [];
  posts.forEach(post => words.push(post.text.split(' ').length));
  return {
    agWords: Math.round(words.reduce((acc, cur) => { return acc + cur; }, 0) / words.length),
    agLikes: Math.round(posts.reduce((acc, cur) => { return acc + cur.likes; }, 0) / posts.length)
  };
};

class UsersController extends Controller {
  constructor(req, res) {
    super();
    this.req = req;
    this.res = res;
  }

  getAction() {
    const {
      limit, offset, relations, where, order
    } = this.req.urlParams;

    models.Users.findAndCountAll({
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

  postAction() {
    const { body } = this.req;

    const categoriesObject = categoriesList.map(item => ({ value: item, times: 0 }));

    const postsList = body.posts;

    const promises = [];

    promisesResponses = [];

    postsList.forEach(item => {
      promises.push(returnData(item.text));
    });

    return Promise.all(promises).then((item) => {
      const classifiedText = returnClassifiedItem(categoriesObject, promisesResponses);
      const averageWordsAndLikes = calculateAverageWordsAndLikes(postsList);

      this.response = {
        ...classifiedText,
        ...averageWordsAndLikes
      };
      this.returnInformation();
    });
  }
}

module.exports = UsersController;
