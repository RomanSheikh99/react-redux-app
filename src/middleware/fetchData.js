import axios from "axios";
import { action } from "../store/store";

const fetchData = async (dispatch, api) => {
  dispatch({ type: action.setLoading, payload: true });
  await axios
    .get(api)
    .then((res) => dispatch({ type: action.setProducts, payload: res.data }))
    .catch((err) => dispatch({ type: action.setError, payload: err.message }));
  dispatch({ type: action.setLoading, payload: false });
};

export default fetchData;
