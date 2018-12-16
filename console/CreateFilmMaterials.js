const chalk = require('chalk');
const movie = require('node-movie');

const models = require('../models');

const materialsList = [
  {
    id: 1,
    title: 'Володар перснів: Хранителі Персня',
    image: 'https://images-na.ssl-images-amazon.com/images/I/A1cENmAtYsL._RI_.jpg',
    voted: 1220,
    mark: 5,
    interest_id: 2,
    description: 'Епічну трилогію Пітера Джексона сміливо можна назвати культовою екранізацією пригодницького роману Д.Р.Р. Толкіна.\n' +
      '\n' +
      'Перший фільм трилогії розповідає про існування неймовірно могутнього кільця всемогутності, створеного злим чаклуном Сауроном, володар якого отримує безмежну владу над всіма живими тваринами цього світу. Саме це маленьке колечко стало передумовою багаторічної війни в Середзем’ї.\n' +
      '\n' +
      'Перша частина знайомить глядача з хоббітами, чарівником Гендальфом Сірим, мандрівником-слідопитом Арагорном та іншими дійовими особами саги.\n' +
      '\n' +
      'Гендальф розповідає про пробудження темних сил та про те, що знищити злого чаклуна можна лише знищивши кільце всевладдя в гирлі вулкану, що знаходиться в Мордорі. Донести його туди зможе лише хоббіт, адже вони не бажають влади. Гендальф переконує Фродо вирушити у небезпечну мандрівку…\n' +
      '\n' +
      'Фільм «Володар перснів: Хранителі персня» (2001) варто дивитись онлайн в українському перекладі всім шанувальникам фентезі та красивого кіно. '
  },
  {
    id: 2,
    title: 'Гладіатор',
    image: 'https://i.pinimg.com/originals/44/31/bd/4431bd4cc9381ba8fe482e83367f3a49.jpg',
    voted: 12320,
    mark: 4.4,
    interest_id: 2,
    description: 'Дія фільму розгортається в 180 році. Сюжет фільму — художня вигадка, яка зовсім не відображає історичну дійсність. Фільм розповідає історію помсти римського полководця Максимуса, несправедливо скривдженого імператором Коммодом. За сюжетом фільму опальний Максимус стає гладіатором і в фіналі перемагає імператора на арені цирку.'
  },
  {
    id: 3,
    title: 'Аватар',
    image: 'http://cafmp.com/wp-content/uploads/2012/11/Avatar.jpg',
    voted: 12420,
    mark: 4.7,
    interest_id: 2,
    description: '«Авата́р» (англ. Avatar) — американський науково-фантастичний фільм 2009 року сценариста і режисера Джеймса Кемерона з Семом Вортінгтоном і Зої Салданою в головних ролях. Дія фільму відбувається в 2154 році, коли людство видобуває цінний мінерал унобтаній на Пандорі, населеному супутнику газової планети в зоряній системі Альфа Центавра. За сюжетом ресурсодобувна корпорація загрожує існуванню місцевого племені людиноподібних розумних істот — на\'ві. Назва фільму — назва генетично спроектованих тіл гібридів на\'ві і людей, які використовуються командою дослідників для вивчення планети та взаємодії з тубільними мешканцями Пандори.\n' +
      '\n' +
      'Створення «Аватара» почалося в середині 1990-х років, коли Джеймс Кемерон написав 80-сторінкову концепцію сценарію фільму. Планувалося розпочати зйомки в 1997-му і випустити «Аватар» в прокат вже в 1999 році, але, за словами Кемерона, на той момент ще не існувало технологій, здатних втілити його бачення картини. Робота над мовою на\'ві почалася влітку 2005 року, а на початку 2006 року Кемерон приступив до створення сценарію і вигаданого всесвіту. За офіційними даними, бюджет «Аватара» становить близько 237 мільйонів доларів, за іншими оцінками, витрати на виробництво фільму варіюються від 280 до 310 мільйонів, а вартість рекламної кампанії оцінюється в 150 мільйонів доларів. Під час зйомок картини широко використовувалася технологія захоплення руху. Фільм вийшов в прокат в традиційному форматі, 3D-форматі (RealD 3D, Dolby 3D, XpanD 3D і IMAX 3D) та в 4D-форматі в деяких кінотеатрах Південної Кореї.\n' +
      '\n' +
      'Прем\'єра «Аватара» відбулася в Лондоні 10 грудня 2009 року. У міжнародний прокат, включаючи США і Канаду, фільм вийшов 16-18 грудня того ж року. Картина мала комерційний успіх і здобула схвалення критиків. Вона побила декілька рекордів по зборах, ставши найкасовішим фільмом всіх часів в Північній Америці, Україні і в усьому світі, обійшовши «Титанік», який утримував рекорд протягом 12 років. «Аватар» також став першим фільмом в історії кінематографа, касові збори якого перевищили позначку в 2 мільярди доларів. Фільм номіновано на «Оскар» в дев\'яти категоріях, включаючи «найкращий фільм» і «найкраща режисерська робота», і переміг в трьох з них: «найкраща операторська робота», «найкращі візуальні ефекти» і «найкраща робота художника-постановника». DVD-реліз фільму побив рекорди продажів, а Blu-ray-видання стало одним з найуспішніших в історії.'
  },
  {
    id: 4,
    title: 'Хоробре серце',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Braveheart_imp.jpg/220px-Braveheart_imp.jpg',
    voted: 12250,
    mark: 4,
    interest_id: 2
  },
  {
    id: 5,
    title: 'Jaws',
    image:
      'https://vignette.wikia.nocookie.net/jaws/images/d/da/Jaws-movie-poster.jpg/revision/latest?cb=20131015071208',
    voted: 1245,
    mark: 4,
    interest_id: 2
  },
  {
    id: 6,
    title: 'Парк Юрського періоду',
    image: 'https://static.tvgcdn.net/feed/1/62/thumbs/117994062_1300x1733.jpg',
    voted: 1220,
    mark: 5,
    interest_id: 2
  }
];

const createNewFilmMaterial = materialData =>
  models.Materials.create(materialData).then(() => {}).catch(err => console.log('err', err));

class CreateFilmMaterials {
  constructor() {
    this.command = 'cfm';
    this.description = 'Create film materials';
  }

  run() {
    const promises = [];

    for (let i = 0; i < materialsList.length; i++) {
      promises.push(createNewFilmMaterial(materialsList[i]).then(() => {
        console.log(chalk.green(' ✔ new material created!'));
      }));
    }

    return Promise.all(promises).then(() => {
      console.log(chalk.red(`\nTotal: ${materialsList.length} added!`));
      models.sequelize.close();
    });
  }
}

module.exports = CreateFilmMaterials;