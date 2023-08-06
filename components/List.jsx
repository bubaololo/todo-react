import { useMutation, useQueryClient } from "react-query";
import { delTask } from "../api";
const List = (props) => {
  const { data } = props;

  const queryClient = useQueryClient();

  const mutationDeleteTask = useMutation((id) => delTask(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos-data");
    },
  });

  const handleDeleteClick = (id) => {
    mutationDeleteTask.mutate(id);
  };

  return (
    <div className="list">
      {data.map((dataItem) => (
        <div key={dataItem.id} className="list__item">
          <span>{dataItem.task} </span>
          <span>
            <button onClick={() => handleDeleteClick(dataItem.id)}>X</button>
          </span>
        </div>
      ))}
    </div>
  );
};
export default List;
