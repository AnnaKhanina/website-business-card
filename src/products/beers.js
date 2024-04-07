import beerImg1 from '../assets/img/products/ch-lager.png';
import beerImg2 from '../assets/img/products/chblanc.png';
import beerImg3 from '../assets/img/products/dunkel.png';
import beerImg4 from '../assets/img/products/khmelevus.png';
import beerImg5 from '../assets/img/products/khmelpivo.png';
import beerImg6 from '../assets/img/products/umanpivo.png';
import beerImg7 from '../assets/img/products/kronen.png';
import beerImg8 from '../assets/img/products/pils.png';
import beerImg9 from '../assets/img/products/satoshi.png';
import beerImg10 from '../assets/img/products/rizdvyne.png';
import beerImg11 from '../assets/img/products/sangushko.png';

export const beers = [
  {
    title: 'Чеський Лагер',
    beerTitle: 'Світле фільтроване',
    beerFactory: 'Виробник: м.Золотоноша, Zlato Beer',
    beerStrength: 'Міцність: 3,9%. Щільність: 11,5%.',
    description:
      'Має насичений зерновий аромат, чистий солодовий смак з тонкою гірчинкою. В післясмаку відчуваються хмельові нотки.',
    imgUrl: beerImg1,
  },
  {
    title: 'Чеський Бланш',
    beerTitle: 'Світле фільтроване',
    beerFactory: 'Виробник: м.Золотоноша, Zlato Beer',
    beerStrength: 'Міцність: 4,8%. Щільність: 11%.',
    description:
      "Пиво має чистий солодовий смак з тонкою гіркуватістю та легким сп'янілим післясмаком.",
    imgUrl: beerImg2,
  },
  {
    title: 'Хмельницьке',
    beerTitle: 'Світле фільтроване',
    beerFactory: 'Виробник: м.Хмельницький, Хмельпиво',
    beerStrength: 'Міцність: 4,5%. Щільність: 12%.',
    description:
      "Має багатий ароматом з солодкими зерновими і солодовими відтінками, фруктовими нюансами. Пиво добре поєднується зі снеками, м'ясними закусками, шинкою, свининою, сендвічами.",
    imgUrl: beerImg5,
  },
  {
    title: 'Дункель',
    beerTitle: 'Темне фільтроване.',
    beerFactory: 'Виробник: м.Умань, Waissburg',
    beerStrength: 'Міцність: 4,7%. Щільність: 11%.',
    description:
      'Цей сорт пива має рубіново-червоний колір із незвично темнуватою шапкою піни. У букеті переважає аромат хмелю, а смажений солод дає пікантну гіркоту.',
    imgUrl: beerImg3,
  },
  {
    title: 'Уманське Медове',
    beerTitle: 'Світле фільтроване непастеризоване.',
    beerFactory: 'Виробник: м. Умань, УманьПиво',
    beerStrength: 'Міцність: 6,5%. Щільність: 11%.',
    description:
      'Світле фільтроване пиво низового бродіння із солодово-медовим ароматом з квітковими нотками. Пиво виготовляється зі світло-ячмінного солоду із додаванням квіткового меду.',
    imgUrl: beerImg6,
  },
  {
    title: 'Хмелевус',
    beerTitle: 'Напівтемне нефільтроване непастеризоване.',
    beerFactory: 'Виробник: м.Чернігів, Sun InBev Ukraine',
    beerStrength: 'Міцність: 6,4%. Щільність: 15%.',
    description:
      'Пшеничне пиво в німецькому стилі. Напій насиченого бурштинового кольору з ароматом стиглих фруктів із пряно-гвоздичними тонами та нотками здоби та випічки. Тіло помірно щільне, смак стиглі фрукти, ефірно-пряні тони, дріжджові нотки.',
    imgUrl: beerImg4,
  },
  {
    title: 'Львівське Різдвяне',
    beerTitle: 'Темне фільтроване пастеризоване.',
    beerFactory: 'Виробник: м.Львів, Львівська пивоварня Carlsberg Ukraine',
    beerStrength: 'Міцність: 4,2%. Щільність: 11.6%.',
    description:
      'Сезонне темне пиво з карамельно-пряним ароматом і ноткою різдвінних спецій, яке вариться до зимових свят.',
    imgUrl: beerImg10,
  },
  {
    title: 'Kronenbourg 1664 Blanc',
    beerTitle: 'Світле нефільтроване',
    beerFactory: 'Виробник: м.Львів, Львівська пивоварня Carlsberg Ukraine',
    beerStrength: 'Міцність: 4,8%. Щільність: 12%.',
    description:
      'Пиво пшеничне з фруктовими нотками, яке виробляється по оригінальній рецептурі, розробленій у Франції. Має м’який солодовий смак з тонким ароматом цитрусових та апельсинової цедри.',
    imgUrl: beerImg7,
  },

  {
    title: 'Pils',
    beerTitle: 'Світле нефільтроване',
    beerFactory:
      'Виробник: с.Стуфчинці, Хмельницька обл., Перша крафтова броварня',
    beerStrength: ' Міцність: 4,7%. Щільність: 11.2%.',
    description:
      "Справжнє крафтове, непастеризоване пиво. Має характерний пивний аромат та м'який присмак хмелю. Виготовлено з натуральної добірної сировини.",
    imgUrl: beerImg8,
  },
  {
    title: 'Satoshi',
    beerTitle: 'Світле нефільтроване непастеризоване',
    beerFactory:
      'Виробник: с.Стуфчинці, Хмельницька обл., Перша крафтова броварня',
    beerStrength: 'Міцність: 4,5%. Щільність: 11%.',
    description:
      'Крафтове, на основі рису, кукурудзяних пластивців, справжнього хмелю і солоду. Смак з явно вираженою кислинкою.',
    imgUrl: beerImg9,
  },
  {
    title: 'Sangushko',
    beerTitle: 'Світле фільтроване',
    beerFactory: 'Виробник: м.Славута, Славута-Пивзавод',
    beerStrength: 'Міцність: 5.5%. Щільність: 14%.',
    description:
      'Світле і м’яке пиво преміум класу. Напій містить в собі ніжні ноти меду і лугових трав, заворожує і одночасно заспокоює.',
    imgUrl: beerImg11,
  },
];
