// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const defaultState = [];

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

// Action Creators
export function checkStatus() {
  return { type: CHECK_STATUS };
}
