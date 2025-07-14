import pizza from './img/pizza.jpg';
import pastaCarbonara from './img/PastaCarbonara.jpg';
import CaesarSalad from './img/Caesar.jpg';
import Omelette from './img/omelette.jpg';
import GrilledChicken from './img/grilled-chicken.jpg';
import VegetableSoup from './img/vegetable-soup.jpg';
import MashedPotatoes from './img/MashedPotatoes.jpg';
import BeefStroganoff from './img/beef-stroganoff.jpg';
import Pancakes from './img/Pancakes.jpg';
import FriedRice from './img/Rice.jpg';

export const RecipesMass = [
  {
    id: 1,
    title: 'Pizza',
    cooking_time: '30-40 min',
    img: pizza,
    Salad: false,
    includeMeat: false,
    containsFlour: true,
    description: 'Классическая итальянская пицца с хрустящей корочкой и ароматной начинкой.',
    steps: [
      'Приготовьте тесто и дайте ему подойти.',
      'Сформируйте основу и добавьте соус и начинку.',
      'Выпекайте в духовке при 220°C около 15 минут.'
    ],
    video: 'https://www.youtube.com/watch?v=3GAMFZa0jqQ'
  },
  {
    id: 2,
    title: 'Pasta Carbonara',
    cooking_time: '20-25 min',
    img: pastaCarbonara,
    includeMeat: true,
    Salad: false,
    containsFlour: true,
    description: 'Традиционная итальянская паста с яйцами, сыром Пармезан и беконом.',
    steps: [
      'Сварите пасту до состояния аль денте.',
      'Обжарьте бекон до хрустящей корочки.',
      'Смешайте яйца с тертым пармезаном и перцем.',
      'Добавьте всё к горячей пасте и перемешайте.'
    ],
    video: 'https://www.youtube.com/watch?v=3AAdKl1UYZs'
  },
  {
    id: 3,
    title: 'Caesar Salad',
    cooking_time: '15-20 min',
    img: CaesarSalad,
    includeMeat: true,
    Salad: true,
    containsFlour: false,
    description: 'Популярный салат с курицей, крутонами и соусом Цезарь.',
    steps: [
      'Обжарьте курицу и нарежьте её.',
      'Смешайте листья салата с соусом Цезарь.',
      'Добавьте курицу и крутоны, посыпьте сыром.'
    ],
    video: 'https://www.youtube.com/watch?v=uDgmZ9fAGbQ'
  },
  {
    id: 4,
    title: 'Omelette',
    cooking_time: '10-15 min',
    img: Omelette,
    Salad: false,
    includeMeat: false,
    containsFlour: false,
    description: 'Простой омлет из яиц с молоком и специями.',
    steps: [
      'Взбейте яйца с молоком и солью.',
      'Вылейте смесь на сковороду и жарьте до готовности.',
      'Добавьте по вкусу зелень, сыр или овощи.'
    ],
    video: 'https://www.youtube.com/watch?v=PUP7U5vTMM0'
  },
  {
    id: 5,
    title: 'Grilled Chicken',
    cooking_time: '30-40 min',
    img: GrilledChicken,
    includeMeat: true,
    Salad: false,
    containsFlour: false,
    description: 'Сочное куриное филе, приготовленное на гриле с приправами.',
    steps: [
      'Замаринуйте курицу в специях.',
      'Обжарьте на гриле с двух сторон до готовности.',
      'Подавайте с соусом или гарниром.'
    ],
    video: 'https://www.youtube.com/watch?v=N9Lge7wQm24'
  },
  {
    id: 6,
    title: 'Vegetable Soup',
    cooking_time: '40-50 min',
    img: VegetableSoup,
    Salad: false,
    includeMeat: false,
    containsFlour: false,
    description: 'Легкий суп с сезонными овощами и ароматными травами.',
    steps: [
      'Нарежьте овощи и обжарьте лук.',
      'Добавьте воду или бульон и варите до мягкости.',
      'Подавайте с зеленью и свежим хлебом.'
    ],
    video: 'https://www.youtube.com/watch?v=xT6guXbWG_c'
  },
  {
    id: 7,
    title: 'Mashed Potatoes',
    cooking_time: '25-30 min',
    img: MashedPotatoes,
    Salad: false,
    includeMeat: false,
    containsFlour: false,
    description: 'Нежное картофельное пюре с маслом и молоком.',
    steps: [
      'Очистите и отварите картофель.',
      'Разомните с добавлением молока и сливочного масла.',
      'Приправьте по вкусу.'
    ],
    video: 'https://www.youtube.com/watch?v=aPZzYQ8KULY'
  },
  {
    id: 8,
    title: 'Beef Stroganoff',
    cooking_time: '40-50 min',
    img: BeefStroganoff,
    Salad: false,
    includeMeat: true,
    containsFlour: false,
    description: 'Классическое блюдо из говядины с грибами в сливочном соусе.',
    steps: [
      'Обжарьте мясо до золотистой корочки.',
      'Добавьте грибы, лук и сметану.',
      'Тушите до мягкости и подавайте с гарниром.'
    ],
    video: 'https://www.youtube.com/watch?v=yYKHw8FiQ1M'
  },
  {
    id: 9,
    title: 'Pancakes',
    cooking_time: '15-20 min',
    img: Pancakes,
    Salad: false,
    includeMeat: false,
    containsFlour: true,
    description: 'Пышные блинчики для завтрака или десерта.',
    steps: [
      'Смешайте яйца, молоко, муку и сахар.',
      'Выпекайте на сковороде до румяной корочки.',
      'Подавайте с мёдом, ягодами или сиропом.'
    ],
    video: 'https://www.youtube.com/watch?v=cyrL8q3nkP4'
  },
  {
    id: 10,
    title: 'Fried Rice',
    cooking_time: '20-25 min',
    img: FriedRice,
    Salad: false,
    includeMeat: false,
    containsFlour: false,
    description: 'Азиатский жареный рис с овощами и соевым соусом.',
    steps: [
      'Обжарьте овощи и варёный рис на сковороде.',
      'Добавьте соевый соус и специи.',
      'Жарьте до золотистого цвета.'
    ],
    video: 'https://www.youtube.com/watch?v=3kXx5SZo8_M'
  }
];
