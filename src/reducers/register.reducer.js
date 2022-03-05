import { authConstants } from "../actions/constants";

const initialState = {
    error: null,
    user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        picture: "",
    }, 
    loading: false,
};
const registerReducer = (state = initialState, action) => {
    switch(action.type){
        case authConstants.SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case authConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                loading: false,
                error: null,
            }
            break;
        case authConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            break;
        default:
            state = {
                ...state
            }
    }
    return state;
}
export default registerReducer;