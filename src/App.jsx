import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api";


import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function App() {
  const [activeTab, setActiveTab] = useState(0); // Default active tab index
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

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabLabels = ["Personal", "Work", "Shopping"];
  const filteredData = data.filter(item => item.type === tabLabels[activeTab]);

  return (
    <div className="main__wrapper">
      <Form setData={setData} />
      <Tabs value={activeTab} onChange={handleChangeTab}>
        {tabLabels.map((label, index) => (
          <Tab label={label} key={index} />
        ))}
      </Tabs>
      <TodoList data={data} />
    </div>
  );
}

export default App;