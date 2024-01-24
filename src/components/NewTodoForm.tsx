interface NewTodoFormProps {
  value: string;
  updateText: (value: string) => void;
  handleAction: () => void;
}

const NewTodoForm = ({ value, updateText, handleAction }: NewTodoFormProps) => {
  return (
    <label>
      <input
        placeholder="new todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
