const initialState = {
  events: [],
  currentEvent: false,
  fetching: false,
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_EVENTS':
      return { ...state, fetching: true };
    case 'FETCHED_EVENTS':
      return { ...state, events: action.payload, fetching: false };
    case 'CANCEL_EVENTS':
      return { ...state, fetching: false };
    case 'FETCHING_EVENT':
      return { ...state, fetching: true };
    case 'FETCHED_EVENT':
      return { ...state, currentEvent: action.payload, fetching: false };
    default:
      return state;
  }
}
