import axios from "axios";
import { mockClient } from "./client";

//axios instance
const client = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
// add mock api to client instance
mockClient(client);

export default client;
