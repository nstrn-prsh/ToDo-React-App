import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "react-bootstrap";
import uuidv4 from "uuid/v4";
import TodoContext from "../context/todoContext";
import Todos from "../Components/Todos";
import AddNewTask from "../Components/AddNewTask";
import Header from "./../Common/Header";
// component tabeii

const App = () => {
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
        handleCreateNewTodo: handleCreateNewTodo,
        handleTodoInput: handleTodoInput,
        handleCompletedTodo: handleCompletedTodo,
        handleDeleteTodo: handleDeleteTodo,
      }}
    >
      <div className='rtl text-center'>
        <Header />
      </div>
      <div className='d-flex justify-content-center container'>
        <div className='col-md-8'>
          <div className='rtl text-center'>
            <Button
              variant={
                getStateDisplayList ? "light btn-large" : "danger btn-large"
              }
              onClick={showList}
              active
            >
              نمایش لیست
            </Button>
          </div>
          <div className='card-hover-shadow-2x mb-3 card'>
            {getStateDisplayList ? <Todos /> : null}
          </div>
        </div>
      </div>
      <AddNewTask />
      <ToastContainer />
    </TodoContext.Provider>
  );
};

export default App;
