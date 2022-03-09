import { SET_LOADING } from "../../actions";

const inicialState = {
  isLoading: false,
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      const newState = { ...state, ...action.payload };
      newState.isLoading = action.payload;
      console.log("state :"+ newState.isLoading)
      return newState.isLoading;

    default:
      return state;
  }
};

export default reducer;
