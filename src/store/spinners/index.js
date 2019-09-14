const SET_SPINNER = 'SPINNERS/SET_SPINNER';

export const setSpinner = (module, show) => ({
  type: SET_SPINNER,
  payload: { module, show },
});

const initialState = {
  auth: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SPINNER: {
      const { module, show } = action.payload;
      return {
        ...state,
        [module]: show,
      };
    }
    default: {
      return state;
    }
  };
};

export { initialState }
export default reducer;