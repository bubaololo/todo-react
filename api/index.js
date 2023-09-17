import axios from "axios";

// const baseUrl = "https://brightside.gq/api/v1/";
const baseUrl = "http://todo.api/api/v1/";

const url = baseUrl + "tasks";

export const getTodos = async (payload) => {  
  return await axios.get(url, {params: payload}).then((response) => response.data);
};

export const addTodos = async (payload) => {
  return await axios.post(url, payload).then((response) => response.data);
};

export const delTask = async(id) => {
  return await axios.delete(url + '/' + id).then((response) => response.data);
}
