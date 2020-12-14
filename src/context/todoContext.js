import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  todo: "",
  buttonList: true,
  showList: () => {},
  handleCreateNewTodo: () => {},
  handleTodoInput: () => {},
  handleCompletedTodo: () => {},
  handleDeleteTodo: () => {},
});

export default TodoContext;
