const initialState = {
  events: [],
  currentEvent: false,
  editing: false,
  fetching: false,
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_EVENTS':
      return { ...state, fetching: true };
    case 'FETCHED_EVENTS':
      return { ...state, events: action.payload, fetching: false };
    case 'FETCHING_EVENT':
      return { ...state, fetching: true };
    case 'FETCHED_EVENT':
      return { ...state, currentEvent: action.payload, fetching: false };
    case 'SUBMIT_START':
      return { ...state, fetching: true };
    case 'SUBMIT_END':
      return { ...state, currentEvent: action.payload, fetching: false };
    case 'EDIT_EVENT':
      return { ...state, editing: true };
    case 'EDIT_START':
      return { ...state, fetching: true };
    case 'CANCEL_EDIT':
      return { ...state, editing: false };
    case 'EDIT_COMPLETE':
      return { ...state, editing: false, currentEvent: action.payload, fetching: false };
    case 'DELETE_START':
      return { ...state, fetching: true };
    case 'DELETE_COMPLETE':
      return { ...state, currentEvent: false, fetching: false };
    case 'EVENT_ERROR':
      return { ...state, fetching: false };
    default:
      return state;
  }
}
