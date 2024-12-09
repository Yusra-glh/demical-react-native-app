import type {OnboardingTypes, ChatType} from '../types';
import {svg} from '../assets/svg';

const sortingBy = [
  {id: 1, title: 'Best match'},
  {id: 2, title: 'Price: low to high'},
  {id: 3, title: 'Price: high to low'},
  {id: 4, title: 'Newest'},
  {id: 5, title: 'Customer rating'},
  {id: 6, title: 'Most popular'},
];

const reviews = [
  {
    id: 1,
    name: 'Lana Hansen',
    photo: 'https://george-fx.github.io/demical/users/01.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2023 at 3:45 pm',
  },
  {
    id: 2,
    name: 'Erik Pineda',
    photo: 'https://george-fx.github.io/demical/users/02.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2023 at 3:45 pm',
  },
  {
    id: 3,
    name: 'Joanna Mccullough',
    photo: 'https://george-fx.github.io/demical/users/03.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2023 at 3:45 pm',
  },
  {
    id: 4,
    name: 'Johnathan Montes',
    photo: 'https://george-fx.github.io/demical/users/04.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2023 at 3:45 pm',
  },
];

const onboardingData: OnboardingTypes[] = [
  {
    id: 1,
    image: require('../assets/images/01.jpg'),
    title: 'Welcome to\ndemical!',
    description: 'Labore sunt culpa excepteur\nculpa occaecat ex nisi mollit.',
  },
  {
    id: 2,
    image: require('../assets/images/02.jpg'),
    title: 'Make an appointment\nwith ease!',
    description: 'Labore sunt culpa excepteur\nculpa occaecat ex nisi mollit.',
  },
  {
    id: 3,
    image: require('../assets/images/03.jpg'),
    title: 'Get your prescription\nand test results!',
    description: 'Labore sunt culpa excepteur\nculpa occaecat ex nisi mollit.',
  },
];

const payments = [
  {
    id: 1,
    type: 'Visa',
    number: ' **** 4864',
    icon: 'https://george-fx.github.io/kastelli/payments/01.png',
  },
  {
    id: 2,
    type: 'Mastercard',
    number: ' **** 3597',
    icon: 'https://george-fx.github.io/kastelli/payments/02.png',
  },
  {
    id: 3,
    type: 'Apple Pay',
    icon: 'https://george-fx.github.io/kastelli/payments/03.png',
  },
];

const products = [
  {
    id: 1,
    name: 'Kids Red Hoodie, S, pink',
    quantity: 1,
    price: 34.95,
  },
  {
    id: 2,
    name: 'Kids Red Hoodie, S, pink',
    quantity: 1,
    price: 34.95,
  },
];

const history = [
  {
    id: 1,
    orderId: 456654,
    date: 'Aug 31, 2023',
    time: 'at 8:32 pm',
    total: 25.83,
    status: 'Shipping',
    products: products,
  },
  {
    id: 2,
    orderId: 456654,
    date: 'Aug 31, 2023',
    time: 'at 8:32 pm',
    total: 281.85,
    status: 'Delivered',
    products: products,
  },
  {
    id: 3,
    orderId: 456654,
    date: 'Aug 31, 2023',
    time: 'at 8:32 pm',
    total: 281.85,
    status: 'Canceled',
    products: products,
  },
];

const cards = [
  {
    id: 1,
    image: 'https://george-fx.github.io/manero/cards/01.jpg',
  },
  {
    id: 2,
    image: 'https://george-fx.github.io/manero/cards/02.jpg',
  },
  {
    id: 3,
    image: 'https://george-fx.github.io/manero/cards/03.jpg',
  },
];

const questions = [
  {
    id: '1',
    question: 'How to change personal information?',
    answer:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
  },
  {
    id: '2',
    question: 'Where to find my diagnostic results?',
    answer:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
  },
  {
    id: '3',
    question: 'How to Make an appointment?',
    answer:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
  },
  {
    id: '4',
    question: 'How can I pay for my order?',
    answer:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
  },
  {
    id: '5',
    question: 'Covid - 19 test for kids',
    answer:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
  },
  {
    id: '6',
    question: 'How to pay for medical service?',
    answer:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
  },
];

const chat = [
  {
    id: 1,
    name: 'Dr. Georgia Griffin',
    status: 'Online',
    typing: true,
    lastMessage: 'I will call you later',
    time: '12:34',
    read: true,
    newMessages: 0,
    photo: 'https://george-fx.github.io/demical/doctors/01.jpg',
    history: [
      {
        id: 1,
        message: 'Hello, how are you?',
        time: '12:34',
        sender: 'me',
      },
      {
        id: 2,
        message: 'I am fine, thank you',
        time: '12:35',
        sender: 'doctor',
      },
      {
        id: 3,
        message: 'I will call you later',
        time: '12:36',
        sender: 'me',
      },
    ],
  },
  {
    id: 2,
    name: 'Dr. Bernard Butler',
    status: 'Offline',
    typing: false,
    lastMessage: 'Consat ut ea dolor aliqua laboru...',
    time: 'yesterday',
    read: false,
    newMessages: 0,
    photo: 'https://george-fx.github.io/demical/doctors/02.jpg',
    history: [
      {
        id: 1,
        message: 'Hello, how are you?',
        time: '12:34',
        sender: 'me',
      },
      {
        id: 2,
        message: 'I am fine, thank you',
        time: '12:35',
        sender: 'doctor',
      },
      {
        id: 3,
        message: 'I will call you later',
        time: '12:36',
        sender: 'me',
      },
    ],
  },
  {
    id: 3,
    name: 'Dr. Zack Castillo',
    status: 'Offline',
    typing: false,
    lastMessage: 'Consat ut ea dolor aliqua laboru...',
    time: 'Fri',
    read: false,
    newMessages: 1,
    photo: 'https://george-fx.github.io/demical/doctors/03.jpg',
    history: [
      {
        id: 1,
        message: 'Hello, how are you?',
        time: '12:34',
        sender: 'me',
      },
      {
        id: 2,
        message: 'I am fine, thank you',
        time: '12:35',
        sender: 'doctor',
      },
      {
        id: 3,
        message: 'I will call you later',
        time: '12:36',
        sender: 'me',
      },
    ],
  },
  {
    id: 4,
    name: 'Dr. Maribel Fletcher',
    status: 'Offline',
    typing: false,
    lastMessage: 'Consat ut ea dolor aliqua laboru...',
    time: 'Jan 11, 2023',
    read: false,
    newMessages: 0,
    photo: 'https://george-fx.github.io/demical/doctors/04.jpg',
    history: [
      {
        id: 1,
        message: 'Hello, how are you?',
        time: '12:34',
        sender: 'me',
      },
      {
        id: 2,
        message: 'I am fine, thank you',
        time: '12:35',
        sender: 'doctor',
      },
      {
        id: 3,
        message: 'I will call you later',
        time: '12:36',
        sender: 'me',
      },
    ],
  },
];

const notices = [
  {
    id: 1,
    title: 'Your blood test is ready',
    description: 'Consequat ut ea dolor aliqua laborum tempor Lorem culpa.',
    date: '23 Jan 2023 at 3:45 pm',
    read: false,
  },
  {
    id: 2,
    title: 'Your appointment is confirmed',
    description: 'Consequat ut ea dolor aliqua laborum tempor Lorem culpa.',
    date: '23 Jan 2023 at 3:45 pm',
    read: false,
  },
  {
    id: 3,
    title: 'Your appointment is rejected',
    description: 'Consequat ut ea dolor aliqua laborum tempor Lorem culpa.',
    date: '23 Jan 2023 at 3:45 pm',
    read: true,
  },
  {
    id: 4,
    title: 'Your blood test is ready',
    description: 'Consequat ut ea dolor aliqua laborum tempor Lorem culpa.',
    date: '23 Jan 2023 at 3:45 pm',
    read: true,
  },
];

const tests = [
  {
    id: 1,
    title: 'Blood analysis',
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam.',
    price: 15,
    oldPrice: 24,
    image: 'https://george-fx.github.io/demical/tests/01.png',
  },
  {
    id: 2,
    title: 'Amniocentesis',
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam.',
    price: 18,
    image: 'https://george-fx.github.io/demical/tests/02.png',
  },
  {
    id: 3,
    title: 'Gastric fluid analysis',
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam.',
    price: 21,
    image: 'https://george-fx.github.io/demical/tests/03.png',
  },
  {
    id: 4,
    title: 'Kidney function test',
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam.',
    price: 13,
    oldPrice: 17,
    image: 'https://george-fx.github.io/demical/tests/04.png',
  },
];

export {
  reviews,
  payments,
  history,
  cards,
  chat,
  notices,
  tests,
  sortingBy,
  questions,
  onboardingData,
};
