import { useMutation, useQueryClient } from "react-query";
import { delTask } from "../api";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemText from "@mui/material/ListItemText";

const TodoList = (props) => {
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
    <List>
      {data.map((dataItem) => (
        <ListItem>
          <ListItemText key={dataItem.id} primary={dataItem.task} />

          <IconButton
            onClick={() => handleDeleteClick(dataItem.id)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};
export default TodoList;
