"use strict";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

const createTodoElement = (text) => {
  const li = document.createElement("li");
  li.innerHTML = `
          <div>${text}</div>
          <div>
            <button >✔</button>
            <button >✖</button>
          </div>`;
  todosElement.appendChild(li);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value;
  if (!text) return;
  createTodoElement(text);
  input.value = "";
});

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};
