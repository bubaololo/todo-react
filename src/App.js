import { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [data, setData] = useState([""]);

  return (
    <div className="main__wrapper">
      <Form setData={setData} />
      <List data={data} />
    </div>
  );
}

export default App;
