import beerImg from '../assets/img/products/hoegaarden-blanche.png';
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
import beerImg12 from '../assets/img/products/lviv-dunkel.png';
import beerImg13 from '../assets/img/products/lesgak.png';
import beerImg14 from '../assets/img/products/dusha.png';

export const beers = [
  {
    title: 'Hoegaarden Blanche',
    beerTitle: 'Світле нефільтроване',
    beerStrength: '4.9%',
    beerDensity: '--',
    beerFactory: 'м.Чернігів, AB InBev Efes Україна',
    description:
      'Легке нефільтроване біле пшеничне пиво з виразними тонами цитрусів і прянощів. Традиційно вживається в шестигранних склянках. Поширений варіант додавання шматочків свіжих апельсинів попередньо видавивши їх сік в пиво.',
    imgUrl: beerImg,
  },
  {
    title: 'Чеський Лагер',
    beerTitle: 'Світле фільтроване',
    beerStrength: '3,9%',
    beerDensity: '11,5%',
    beerFactory: 'м.Золотоноша, Zlato Beer',
    description:
      'Має насичений зерновий аромат, чистий солодовий смак з тонкою гірчинкою. В післясмаку відчуваються хмельові нотки.',
    imgUrl: beerImg1,
  },
  {
    title: 'Чеський Бланш',
    beerTitle: 'Світле фільтроване',
    beerStrength: '4,8%',
    beerDensity: '11%',
    beerFactory: 'м.Золотоноша, Zlato Beer',
    description:
      "Пиво має чистий солодовий смак з тонкою гіркуватістю та легким сп'янілим післясмаком.",
    imgUrl: beerImg2,
  },
  {
    title: 'Хмельницьке',
    beerTitle: 'Світле фільтроване',
    beerStrength: '4,5%',
    beerDensity: '12%',
    beerFactory: 'м.Хмельницький, Хмельпиво',
    description:
      "Має багатий ароматом з солодкими зерновими і солодовими відтінками, фруктовими нюансами. Пиво добре поєднується зі снеками, м'ясними закусками, шинкою, свининою, сендвічами.",
    imgUrl: beerImg5,
  },
  {
    title: 'Дункель Waissburg',
    beerTitle: 'Темне фільтроване',
    beerStrength: '4,7%',
    beerDensity: '11%',
    beerFactory: 'м.Умань, Waissburg',
    description:
      'Цей сорт пива має рубіново-червоний колір із незвично темнуватою шапкою піни. У букеті переважає аромат хмелю, а смажений солод дає пікантну гіркоту.',
    imgUrl: beerImg3,
  },
  {
    title: 'Уманське Медове',
    beerTitle: 'Світле фільтроване непастеризоване',
    beerStrength: '6,5%',
    beerDensity: '11%',
    beerFactory: 'м.Умань, УманьПиво',
    description:
      'Світле фільтроване пиво низового бродіння із солодово-медовим ароматом з квітковими нотками. Пиво виготовляється зі світло-ячмінного солоду із додаванням квіткового меду.',
    imgUrl: beerImg6,
  },
  {
    title: 'Хмелевус',
    beerTitle: 'Напівтемне нефільтроване непастеризоване',
    beerStrength: '6,4%',
    beerDensity: '15%',
    beerFactory: 'м.Чернігів, Sun InBev Ukraine',
    description:
      'Пшеничне пиво в німецькому стилі. Напій насиченого бурштинового кольору з ароматом стиглих фруктів із пряно-гвоздичними тонами та нотками здоби та випічки. Тіло помірно щільне, смак стиглі фрукти, ефірно-пряні тони, дріжджові нотки.',
    imgUrl: beerImg4,
  },
  {
    title: 'Львівське Різдвяне',
    beerTitle: 'Темне фільтроване пастеризоване',
    beerStrength: '4,2%',
    beerDensity: '11.6%',
    beerFactory: 'м.Львів, Львівська пивоварня Carlsberg Ukraine',
    description:
      'Сезонне темне пиво з карамельно-пряним ароматом і ноткою різдвінних спецій, яке вариться до зимових свят.',
    imgUrl: beerImg10,
  },
  {
    title: 'Kronenbourg 1664 Blanc',
    beerTitle: 'Світле нефільтроване',
    beerStrength: '4,8%',
    beerDensity: '12%',
    beerFactory: 'м.Львів, Львівська пивоварня Carlsberg Ukraine',
    description:
      'Пиво пшеничне з фруктовими нотками, яке виробляється по оригінальній рецептурі, розробленій у Франції. Має м’який солодовий смак з тонким ароматом цитрусових та апельсинової цедри.',
    imgUrl: beerImg7,
  },
  {
    title: 'Дункель Львівське',
    beerTitle: 'Темне фільтроване',
    beerStrength: '4,7%',
    beerDensity: '11%',
    beerFactory: 'м.Львів, Львівська пивоварня Carlsberg Ukraine',
    description:
      'Завдяки технології обсмаження солоду, відрізняється яскраво вираженим карамельним смаком, приємною хмельовою гіркотою та легким солодким присмаком.',
    imgUrl: beerImg12,
  },

  {
    title: 'Pils',
    beerTitle: 'Світле нефільтроване',
    beerStrength: '4,7%',
    beerDensity: '11.2%',
    beerFactory: 'с.Стуфчинці, Хмельницька обл., Перша крафтова броварня',
    description:
      "Справжнє крафтове, непастеризоване пиво. Має характерний пивний аромат та м'який присмак хмелю. Виготовлено з натуральної добірної сировини.",
    imgUrl: beerImg8,
  },
  {
    title: 'Satoshi',
    beerTitle: 'Світле нефільтроване непастеризоване',
    beerStrength: '4,5%',
    beerDensity: '11%',
    beerFactory: 'с.Стуфчинці, Хмельницька обл., Перша крафтова броварня',
    description:
      'Крафтове, на основі рису, кукурудзяних пластивців, справжнього хмелю і солоду. Смак з явно вираженою кислинкою.',
    imgUrl: beerImg9,
  },
  {
    title: 'Sangushko',
    beerTitle: 'Світле фільтроване непастерезоване',
    beerStrength: '5.5%',
    beerDensity: '14%',
    beerFactory: 'м.Славута, Славута-Пивзавод',
    description:
      'Світле і м’яке пиво преміум класу. Напій містить в собі ніжні ноти меду і лугових трав, заворожує і одночасно заспокоює.',
    imgUrl: beerImg11,
  },
  {
    title: 'Пльзенский Лежак',
    beerTitle: 'Світле фільтроване непастерезоване',
    beerStrength: '4%',
    beerDensity: '14%',
    beerFactory: 'м.Славута, Славута-Пивзавод',
    description:
      'Лагерне, живе пиво. Для виробництва використовують світлий ячмінний солод, український шишковий хміль з додаванням чеського тонкоароматичного хмелю «Жатецький» та м’яка вода.',
    imgUrl: beerImg13,
  },
  {
    title: 'Пивна Душа Преміум',
    beerTitle: 'Світле фільтроване непастерезоване',
    beerStrength: '5.2%',
    beerDensity: '13%',
    beerFactory: 'м.Луцьк, Zeman',
    description:
      'Світлий насичений лагер. Має чудову хлібну ароматику, приємний смак та легку солодкуватість. Додавання рису надає цьому сорту такий м’який смак. Хмелева гірчинка збалансована, тонка та ледь помітна.',
    imgUrl: beerImg14,
  },
];
