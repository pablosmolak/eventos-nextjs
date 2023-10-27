import axios from "axios";

export function apiCliente() {

  const api = axios.create({
    baseURL: process.env.LINKAPI || "http://localhost:3010/"
  });

  return api;
}
