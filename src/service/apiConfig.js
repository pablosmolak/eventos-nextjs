import axios from "axios";

export function apiCliente() {

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_LINK_API
  });

  return api;
}
