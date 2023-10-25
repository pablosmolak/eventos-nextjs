import axios from "axios";

export function apiCliente() {

  const api = axios.create({
    baseURL: "http://localhost:3001/",
  });

  return api;
}
