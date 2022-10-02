import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();

    const payload = JSON.stringify({
      text: name,
    });

    fetch("https://rockandrolla.tk/add.php", {
      method: "POST",
      body: payload,
    });

    setName("");
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        className="text__input"
        type="text"
        value={name}
        onChange={handleOnChange}
      />
      <button onClick={handleAddTodo} className="submit__button">
        добавить задачу
      </button>
    </div>
  );
}
export default Form;
