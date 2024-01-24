import { useAppDispatch } from "../hooks/hooks";
import { toggleComplete, removeTodo } from "../store/todoSlice";

interface TodoItemsProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem = ({ id, title, completed }: TodoItemsProps) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
