import axios from "axios";
import { url } from "../../config/constants";
import { setSpaces, setSpacesWithStories } from "./slice";

export const getSpaces = () => async (dispatch, getState) => {
  const response = await axios.get(`${url}`);
  dispatch(setSpaces(response.data));
};

export const getSpacesWStories = () => async (dispatch, getState) => {
  const response = await axios.get(`${url}/spaces`);
  dispatch(setSpacesWithStories(response.data));
};
