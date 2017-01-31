const initialState = {
  events: [],
  fetching: false,
};

export default function matchupReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_EVENTS':
      return { ...state, fetching: true };
    case 'FETCHED_EVENTS':
      return { ...state, events: state.events.concat(action.payload), fetching: false };
    case 'CANCEL_EVENTS':
      return { ...state, fetching: false };
    default:
      return state;
  }
}
