import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const tabLabels = ["today", "week", "later"];

function App() {
  const [activeTabName, setActiveTabName] = useState(tabLabels[0]);

  const {
    data: todosData,
    isLoading: isLoadingTodosData,
    refetch: refetchTodosData,
  } = useQuery("todos-data", () => getTodos({ type: activeTabName }));

  const handleChangeTab = (event, newValue) => {
    setActiveTabName(tabLabels[newValue]);
  };

  useEffect(() => {
    refetchTodosData();
  }, [activeTabName]);

  return (
    <div className="main__wrapper">
      <Form activeTabName={activeTabName} />
      <Tabs
        value={tabLabels.findIndex((tabName) => tabName === activeTabName)}
        onChange={handleChangeTab}
      >
        {tabLabels.map((label, index) => (
          <Tab label={label} key={index} />
        ))}
      </Tabs>
      {isLoadingTodosData ? (
        <span>Loading...</span>
      ) : (
        <TodoList data={todosData.data} />
      )}
    </div>
  );
}

export default App;
