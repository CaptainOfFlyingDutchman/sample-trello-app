import delay from './delay';

let cards = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    labels: ['feature'],
    lane: 'todo',
    comments: [
      {
        name: 'Author 1',
        text: 'Comment 1'
      },
      {
        name: 'Author 2',
        text: 'Comment 2'
      }
    ]
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    labels: ['feature'],
    lane: 'todo',
    comments: [
      {
        name: 'Author 2',
        text: 'Comment 2'
      },
      {
        name: 'Author 2',
        text: 'Comment 2'
      }
    ]
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
    lane: 'doing',
    labels: ['feature'],
    comments: [
      {
        name: 'Author 3',
        text: 'Comment 3'
      },
      {
        name: 'Author 3',
        text: 'Comment 3'
      }
    ]
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'Description 4',
    lane: 'done',
    labels: ['bug', 'p2'],
    comments: [
      {
        name: 'Author 4',
        text: 'Comment 4'
      },
      {
        name: 'Author 4',
        text: 'Comment 4'
      }
    ]
  },
  {
    id: 5,
    title: 'Title 5',
    description: 'Description 5',
    lane: 'pipeline',
    labels: ['feature', 'login'],
    comments: [
      {
        name: 'Author 5',
        text: 'Comment 5'
      },
      {
        name: 'Author 5',
        text: 'Comment 5'
      }
    ]
  }
];


class CardsApi {
  static getAllCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], cards));
      }, delay);
    });
  }

  static changeCard(cardId, lane) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cardIndex = cards.findIndex(card => card.id === cardId);
        let card = cards.splice(cardIndex, 1)[0];
        let newCard = Object.assign({}, card, { lane: lane });
        cards = cards.concat([newCard]);
        resolve(newCard);
      }, delay);
    });
  }
}

export default CardsApi;
