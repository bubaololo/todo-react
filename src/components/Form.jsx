import { useState } from "react";

function Form(props) {
  const { setData } = props;
  const [name, setName] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();

    setData((prevData) => {
      return [...prevData, name];
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
