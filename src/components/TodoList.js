import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [works, setWorks] = useState([]);

  const addWork = (work) => {
    if (!work.text || /^\s*$/.test(work.text)) {
      return;
    }

    const newWorks = [work, ...works];

    setWorks(newWorks);
  };

  const updateWork = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setWorks((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeWork = (id) => {
    const removedArr = [...works].filter((todo) => todo.id !== id);

    setWorks(removedArr);
  };

  const completeWork = (id) => {
    let updatedTodos = works.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setWorks(updatedTodos);
  };

  return (
    <div>
      <h1>What you gonna do today...?</h1>
      <TodoForm onSubmit={addWork} />
      <Todo
        todos={works}
        completeTodo={completeWork}
        removeTodo={removeWork}
        updateTodo={updateWork}
      />
    </div>
  );
}

export default TodoList;
