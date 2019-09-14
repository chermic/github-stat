import authReducer, { initialState as authInitialState } from './auth';
import spinnersReducer, { initialState as spinnersInitialState } from './spinners';

const createStore = (reducers) => {
  const keys = Object.keys(reducers);

  const mainReducer = (state, action) => {
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const [reducer] = reducers[key];
      const newState = reducer(state[key], action);
      if (state[key] !== newState) {
        return { ...state, [key]: newState };
      }
    }
    return state;
  };

  const initialState = {};
  keys.forEach((key) => {
    const [, state] = reducers[key];
    initialState[key] = state;
  })

  return { mainReducer, initialState };
};

const { mainReducer, initialState } = createStore({
  auth: [authReducer, authInitialState],
  spinners: [spinnersReducer, spinnersInitialState],
});

export { initialState };
export default mainReducer;