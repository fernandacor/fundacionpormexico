import jsonServerProvider from "ra-data-json-server";
import { fetchUtils } from "react-admin";

const fetchJsonUtil = (url: any, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  options.headers.set("Authentication", localStorage.getItem("auth"));
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider("https://fass:1337", fetchJsonUtil);
export default dataProvider;
