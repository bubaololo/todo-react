import { useEffect, useState } from "react";
import { getTodos } from "./api";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [data, setData] = useState([""]);

  useEffect(() => {
    const fetchTodos = async () => {
      const responseData = await getTodos();

      setData(responseData);
    };

    fetchTodos();
  }, []);

  return (
    <div className="main__wrapper">
      <Form setData={setData} />
      <List data={data} />
    </div>
  );
}

export default App;
