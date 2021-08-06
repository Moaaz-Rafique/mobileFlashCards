import {ADD_CARD, ADD_DECK, REMOVE_CARD, REMOVE_DECK} from './types.js';
const INTIAL_STATE = {
  decks: {
    '1dsa1234': {
      id: '1dsa1234',
      name: 'My Decks',
      cards: [
        {
          question: 'Card1Question1',
          answer: 'answer11',
        },
        {
          question: 'Card2Qustion2',
          answer: 'answer12',
        },
      ],
    },
    '1dsada1234': {
      id: '1dsada1234',
      name: 'your Decks',
      cards: [
        {
          question: 'Card1',
          answer: 'answerdas1',
        },
        {
          question: 'safdsa',
          answer: 'safsdf2',
        },
      ],
    },
  },
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD: {
      let newDecks = {...state.decks};
      newDecks[action.id].cards.push(action.card);
      return {
        ...state,
        decks: newDecks,
      };
    }
    case ADD_DECK: {
      let newDecks = {...state.decks};
      newDecks[action.id] = action.deck;
      console.log(newDecks);
      return {
        ...state,
        decks: newDecks,
      };
    }
    case REMOVE_DECK: {
      return {
        ...state,
      };
    }
    case REMOVE_CARD: {
      return {
        ...state,
      };
    }
    case 'RESET': {
      return {
        ...INTIAL_STATE,
      };
    }
    default:
      // console.log(action);
      return state;
  }
};
