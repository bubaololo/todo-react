import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api";
import './App.css'

import Form from "../components/Form";
import List from "../components/List";

function App() {
  const [data, setData] = useState([""]);

  const { data: todosData, isLoading: isLoadingTodosData } = useQuery(
    "todos-data",
    () => getTodos()
  );



  useEffect(() => {
    if (!isLoadingTodosData && todosData?.data) {
      setData(todosData.data);
    }
  }, [isLoadingTodosData, todosData?.data]);
  return (
    <div className="main__wrapper">
      <Form setData={setData} />
      <List data={data} />
    </div>
  );
}

export default App;