import axios from "axios";

// const baseUrl = "https://brightside.gq/";
const baseUrl = "http://todo.api/api/v1/";

const url = baseUrl + "tasks";

export const getTodos = async () => {
  
  return axios.get(url).then((response) => response.data);
};

export const addTodos = async (payload) => {
  return await axios.post(url, payload).then((response) => response.data);
};

export const delTask = async(id) => {
  return await axios.delete(url + '/' + id).then((response) => response.data);
}
