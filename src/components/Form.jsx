import { useState } from "react";
import { useMutation } from "react-query";
import { addTodos } from "../../api";
import { useQueryClient } from "react-query";

function Form(props) {
  const { activeTabName } = props;
  const [tabLabel, setTabLabel] = useState("");

  const queryClient = useQueryClient();

  const mutationAddTodo = useMutation((payload) => addTodos(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos-data");
    },
    onSettled: () => {
      setTabLabel("");
    },
  });

  const handleAddTodo = ({ tabLabel, tabType }) => {
    if (tabLabel && activeTabName) {
      const payload = {
        description: tabLabel,
        // label
        // description
        type: tabType,
      };

      mutationAddTodo.mutate(payload);
    }
  };

  const handleOnChange = (e) => {
    setTabLabel(e.target.value);
  };

  return (
    <>
      <input
        className="text__input"
        type="text"
        value={tabLabel}
        onChange={handleOnChange}
      />
      <button
        onClick={() =>
          handleAddTodo({ tabLabel: tabLabel, tabType: activeTabName })
        }
        className="submit__button"
      >
        добавить задачу
      </button>
    </>
  );
}
export default Form;
