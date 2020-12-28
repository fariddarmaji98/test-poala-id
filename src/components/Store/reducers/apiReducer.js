import { GET_API, API_ERROR } from "../type";

const initialState = {
  dataApi: [],
  loading: true,
  error: false,
  dataError: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        error: false,
        loading: false,
        dataError: [],
        dataApi: action.payload,
      };
    case API_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        dataError: action.payload,
        dataApi: [],
      };
    default:
      return state;
  }
}
