import { GET_API, API_ERROR } from "../type";
import axios from "axios";

export const getAll = () => async (dispatch) => {
  try {
    const res = await axios.get("https://randomuser.me/api");
    dispatch({
      type: GET_API,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: API_ERROR,
      payload: console.log(e),
    });
  }
};
