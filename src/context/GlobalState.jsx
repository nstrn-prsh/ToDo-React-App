import React, { useState } from "react";
import { toast } from "react-toastify";
import TodoContext from "./todoContext";
import uuidv4 from "uuid/v4";

const GlobalState = (props) => {
  const [getTodos, setTodos] = useState([]);
  const [getTodo, setTodo] = useState("");
  const [getStateDisplayList, setStateDisplayList] = useState(true);

  const showList = () => {
    setStateDisplayList(!getStateDisplayList);
  };

  const handleCreateNewTodo = () => {
    const todos = [...getTodos];
    const todo = {
      id: uuidv4(),
      text: getTodo,
      completed: false,
    };
    let re = /\S/g;
    if (re.exec(getTodo) !== null) {
      todos.push(todo);
      setTodos(todos);
      setTodo("");
    }
  };

  const handleCompletedTodo = (id) => {
    const todos = [...getTodos];
    const todoIndex = todos.findIndex((t) => t.id === id);
    const todo = todos[todoIndex];
    todo.completed = !todo.completed;
    todos[todoIndex] = todo;
    setTodos(todos);

    if (todo.completed) {
      toast.success("کارتو انجام دادی!", {
        position: "bottom-right",
        closeButton: true,
        coseOnClick: true,
      });
    }
  };

  const handleDeleteTodo = (id) => {
    const todos = [...getTodos];
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);

    const todoIndex = todos.findIndex((t) => t.id === id);
    const todo = todos[todoIndex];
    toast.error(`${todo.text} از لیست حذف شد`, {
      position: "bottom-left",
      closeButton: true,
      closeOnClick: true,
    });
  };

  const handleTodoInput = (event) => {
    setTodo(event.target.value);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: getTodos,
        todo: getTodo,
        buttonList: getStateDisplayList,
        showList: showList,
        handleCreateNewTodo: handleCreateNewTodo,
        handleTodoInput: handleTodoInput,
        handleCompletedTodo: handleCompletedTodo,
        handleDeleteTodo: handleDeleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default GlobalState;
