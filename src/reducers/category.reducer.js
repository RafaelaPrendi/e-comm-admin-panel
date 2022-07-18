import { categoryConstants } from "../actions/constants";

const initialState = {
  categories: [],
  newCategory: null,
  editedCategory: null,
  loading: false,
  deleted: false,
  error: null,
};
const categoryReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // GET REQUEST
    case categoryConstants.GET_ALL_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.GET_ALL_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };
      break;
    case categoryConstants.GET_ALL_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    // ADD REQUEST

    case categoryConstants.ADD_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.ADD_CATEGORY_SUCCESS:
      state = {
        ...state,
        newCategory: action.payload.category,
        categories: action.payload.categories,
        loading: false,
      };
      break;
    case categoryConstants.ADD_CATEGORY_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    // EDIT REQUEST
    case categoryConstants.EDIT_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.EDIT_CATEGORY_SUCCESS:
      state = {
        ...state,
        editedCategory: action.payload.category,
        categories: action.payload.categories,
        loading: false,
      };
      break;
    case categoryConstants.EDIT_CATEGORY_FAILURE:
      state = {
        ...state,
        loading: false,
        editedCategory: null,
        error: action.payload.error,
      };
      break;
    // DELETE REQUEST
    case categoryConstants.DELETE_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.DELETE_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        deleted: true,
      };
      break;
    case categoryConstants.DELETE_CATEGORY_FAILURE:
      state = {
        ...state,
        loading: false,
        deleted: false,
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
export default categoryReducer;
