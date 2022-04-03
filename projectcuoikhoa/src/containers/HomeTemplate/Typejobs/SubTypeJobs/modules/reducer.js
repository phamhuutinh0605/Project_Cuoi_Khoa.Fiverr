import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const subtypejobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SUB_TYPE_JOBS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.SUB_TYPE_JOBS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.SUB_TYPE_JOBS_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default subtypejobsReducer;




