// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const defaultState = [
  {
    id: '1',
    author: 'Daniel',
    title: 'How to get away with mass murder',
    category: 'adventure',
  },
  {
    id: '2',
    author: 'Arturo',
    title: 'How To Make A Professional Resume',
    category: 'adventure',
  },
  {
    id: '3',
    author: 'Luis',
    title: 'Polygons Are Old-School, Multigons Are In',
    category: 'maths',
  },
];

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

// Action Creators
export function addBook(obj) {
  return { type: ADD_BOOK, payload: obj };
}

export function removeBook(obj) {
  return { type: REMOVE_BOOK, payload: obj };
}
