import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/94988575-2136-4578-b9d6-9b1c1f8f6f8d",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer $(token)`;
  } else {
    delete API.defaults.headers.common[Authorization];
  }
};
