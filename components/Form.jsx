import { useState } from "react";
import { useMutation } from "react-query";
import { addTodos } from "../api";
import { useQueryClient } from "react-query";

function Form() {
  const [name, setName] = useState("");

  const queryClient = useQueryClient();

  const mutationAddTodo = useMutation(
    "add-todo",
    (payload) => addTodos(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos-data");
        setName("");
      },
    }
  );

  const handleAddTodo = (event) => {
    event.preventDefault();

    const payload = {
      task: name,
    };

    mutationAddTodo.mutate(payload);
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