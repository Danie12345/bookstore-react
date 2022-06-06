// Actions
const STATUS_CHECKED = 'STATUS_CHECKED';
const defaultState = [];

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
}

// Action Creators
export function checkStatus() {
  return { type: STATUS_CHECKED };
}
