import { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [data, setData] = useState([""]);

  const ajaxSend = async(formData) => {
    fetch('http://react.loc/read.php', {
        method: 'POST',
        body: formData
    }).then(resp => {
      console.log(`data ${resp.data}`)
      debugger
    })
};
ajaxSend()

  return (
    <div className="main__wrapper">
      <Form setData={setData} />
      <List data={data} />
    </div>
  );
}

export default App;
