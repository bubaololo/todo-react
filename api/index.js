import axios from "axios";

const baseUrl = 'https://brightside.gq/';

export const getTodos = async () => {
  const url = baseUrl + "api/tasks";

  return axios.get(url).then((response) => response.data);
};

export const addTodos = async (payload) => {
  const url = baseUrl + "api/tasks";

  return await axios.post(url, payload).then((response) => response.data);
};
