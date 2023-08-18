import { useState } from "react";
import { useMutation } from "react-query";
import { addTodos } from "../../api";
import { useQueryClient } from "react-query";

function Form() {
  const [name, setName] = useState("");

  const queryClient = useQueryClient();

  const mutationAddTodo = useMutation((payload) => addTodos(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos-data");
    },
    onSettled: () => {
      setName("");
    },
  });

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (name) {
      const payload = {
        task: name,
      };

      mutationAddTodo.mutate(payload);
    }
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input
        className="text__input"
        type="text"
        value={name}
        onChange={handleOnChange}
      />
      <button onClick={handleAddTodo} className="submit__button">
        добавить задачу
      </button>
      </>
  );
}
export default Form;
