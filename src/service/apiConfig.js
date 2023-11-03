import axios from "axios";

export function apiCliente() {

  const api = axios.create({
    baseURL: "http://localhost:3010/"
  });

  return api;
}
