import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import { mockComments } from "./mockData";

export const mockClient = (client: AxiosInstance) => {
  const mock = new MockAdapter(client);
  //mock get comments api
  mock.onGet(`${client.defaults.baseURL}comments`).reply(() => {
    return [200, mockComments];
  });
  //mock post comment api
  mock.onPost(`${client.defaults.baseURL}comments`).reply((payload) => {
    return [200, payload.data];
  });
};
