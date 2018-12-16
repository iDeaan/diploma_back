const faker = require('faker');
const chalk = require('chalk');
const crypto = require('crypto');

const models = require('../models');

const defaultInterestsItems = [
  {
    id: 1,
    title: 'Книги',
    image: 'https://www.dcu.ie/sites/default/files/istock_000002193842small.jpg',
    materials_number: 3,
    description: 'Каталог книг, що мають різні жанри. Просто прочитай їх!!!'
  },
  {
    id: 2,
    title: 'Фільми',
    image: 'https://www.azernews.az/media/2018/06/27/film.jpg',
    materials_number: 3,
    description: 'Каталог фільмів, що мають різні жанри. Просто переглянь їх!!!'
  },
  {
    id: 3,
    title: 'Музика',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtEW4ve_ZbK1dsXQ66WXIkf7WdPF8V-UF7WmG9eT6F-DbnH0Dc',
    materials_number: 3,
    description: 'Каталог пісень, що мають різні жанри. Просто послухай їх!!!'
  },
  {
    id: 4,
    title: 'Музичні інструменти',
    image: 'http://getwallpapers.com/wallpaper/full/d/b/9/1105988-vertical-music-instrument-wallpaper-2560x1600.jpg',
    description: 'Музи́чний інструме́нт — інструмент, призначений для виконання музики. Будь-який інструмент,'
      + ' що здатний відтворювати звуки за певних умов і в певних музичних традиціях може бути використаним, як музичний.'
      + ' Наука, що вивчає історію, культурні традиції та технічні особливості музичних інструментів називається'
      + ' інструментознавством або органологією.',
    materials_number: 3
  },
  {
    id: 5,
    title: 'Подорожі',
    image: 'https://content.presspage.com/uploads/685/1920_bookingheroes-9.jpg?10000',
    description: '<div>\n'
      + '<p>\n'
      + 'Подорож — переміщення якоюсь певною територією з метою її вивчення, а також із загальноосвітньою,\n'
      + 'пізнавальною, спортивною цілями[1].\n'
      + 'До XVIII–XIX ст. подорожі були одним з основних джерел інформації про ті чи інші країни (їх природу,\n'
      + 'населення, історію, господарство), загальний характер та рельєф поверхні Землі.\n'
      + 'Від античного часу збереглися описи подорожей Геродота, вчених, які супроводжували Олександра Македонського\n'
      + 'в його походах. Класичний приклад подорожей Середньовіччя — походи Марко Поло й Афанасія Нікітіна.\n'
      + 'Пізніше велике значення для розширення знань про Землю мали мандрівки Д. Лівінгстона і Г. Стенлі,\n'
      + 'М. М. Пржевальського та інших. М. М.Пржевальський називав свої мандри науковими, тому що вони могли\n'
      + 'задовольнити лише запити первинного і загального ознайомлення з особливостями тієї чи іншої території.\n'
      + 'Тому вже в XVIII–XIX ст., по мірі поглиблення досліджень, конкретизації та спеціалізації навчальних цілей\n'
      + 'і завдань, подорожі набувають характеру навчальних експедицій (Арміній Вамбері).\n'
      + '</p>\n'
      + '<p>\n'
      + '<b>Подорожі змінюють твоє ставлення до світу</b><br/>\n'
      + 'Ти можеш 20 років прожити, наприклад в Києві, і вважати його великим містом, а Одесу – кращим курортом.\n'
      + 'Але коли ти вибираєшся за межі своєї країни і занурюєшся в міста, значно більші, де пляжі зовсім… інакші;\n'
      + 'коли спостерігаєш розкішні схід і захід сонця, диких тварин у природному середовищі,чудові і величні водоспади\n'
      + 'і незвичайні пам’ятники архітектури… Тільки тоді ти починаєш усвідомлювати, який великий, різноманітний і\n'
      + 'дивовижний цей Світ. Ти навряд чи побачиш все, що варто було б побачити – але ти можеш спробувати зробити це!\n'
      + 'І після цього ти точно знатимеш, що цей світ заслуговує куди більш дбайливого ставлення, адже він такий\n'
      + 'мальовничий та цікавий, а головне – ти бачив його красу власними очима.\n'
      + '</p>\n'
      + '</div>',
    percentage: 77
  },
  {
    id: 6,
    title: 'Кросворди',
    image: 'https://cdn.medcom.id/images/content/2017/07/19/731448/aN93rPt0Rf.jpg',
    description: 'Кросворди - проведи час з користю',
    materials_number: 3
  }
];

const createNewInterest = (interestData) =>
  models.Interests.create(interestData).then(() => {}).catch(err => console.log('err', err));


class CreateInterests {
  constructor() {
    this.command = 'cni';
    this.description = 'Create new interest (for test)';
  }

  run() {
    let promises = [];

    for (let i=0; i < defaultInterestsItems.length; i++) {
      promises.push(createNewInterest(defaultInterestsItems[i]).then(() => {
        console.log(chalk.green(' ✔ new interest created!'));
      }));
    }

    return Promise.all(promises).then(() => {
      console.log(chalk.red(`\nTotal: ${defaultInterestsItems.length} added!`));
      models.sequelize.close();
    });
  }
}

module.exports = CreateInterests;
