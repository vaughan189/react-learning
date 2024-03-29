import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData(url) {
  return { type: "DATA_REQUESTED", payload: { url } };
}
