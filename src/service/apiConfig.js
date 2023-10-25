import axios from "axios";

export function apiCliente() {

  const api = axios.create({
    baseURL: "https://api-eventos-nextjs.vercel.app/",
  });

  return api;
}
