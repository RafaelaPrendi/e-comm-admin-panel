import { authConstants } from "../actions/constants";

const initialState = {
  token: null,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    picture: "",
  },
  error: null,
  authenticate: false,
  authenticating: false,
  loading: false,
  message: "",
};
const authReducer = (state = initialState, action) => {
  console.log("ACTION=", action);
  console.log(state, "STATE");
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        error: action.payload.error,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: action.payload.error,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...initialState,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initialState,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    default:
      state = {
        ...state,
      };
  }
  return state;
};
export default authReducer;
