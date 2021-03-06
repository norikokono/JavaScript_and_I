// https://upmostly.com/tutorials/build-a-todo-app-in-react-using-hooks#full-source

import React, { useState } from 'react';
import logo from './logo192.png';
import './ToDo.css';
import Switch from "./Switch";
import "./Switch.css";
import LikeDislike from './LikeDislike';
import Like from './Like';
import ShoppingCartButton from './ShoppingCartButton';
import UploadButton from './UploadButton';
import ToastNotification from './ToastNotification';
import UseMemoHook from './UseMemoHook';
import StateProps from './StateProps';
import NoConstructorClass from './NoConstructorClass';
import NoConstructorClass2 from './NoConstructorClass2';
import RadioButtons from './RadioButtons';
import Cache from './Cache';
// import ExportData from './ExportData';
import Form from './Form';
import BoxList from './BoxList';
import UseStateNumber from './UseStateNumber';
import UseStateForm from './UseStateForm';
import CustomFilter from './CustomFilter';
import Parent from './Parent';
import ReadMoreContent from './ReadMoreContent';
import ShowOrHidePassword from './ShowOrHidePassword';
import UseRefHook from './UseRefHook';
import Hangman from './Hangman';
import Recharts from './Recharts';
import ChipComponent from './ChipComponent';
import TooltipComponent from './TooltipComponent';

function ToDo() {
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }
  ]);

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }
  const [value, setValue] = useState(false);
  
  
  return (
    <div className="todo_app">
      <div className="todo_header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul className="todo_ul">
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}  key={i}>
              <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
      <div className="toggle_switch_app">
        <Switch
          isOn={value}
          onColor="#EF476F"
          handleToggle={() => setValue(!value)}
        />
      </div>
      <div>
        <LikeDislike />
        <Like />
        <ShoppingCartButton />
        <UploadButton />
        <ToastNotification />
        <UseMemoHook />
        <StateProps />
        <NoConstructorClass />
        <NoConstructorClass2 />
        <RadioButtons />
        <Cache />
        {/* <ExportData /> */}
        <Form />
        <BoxList />
        <UseStateNumber />
        <UseStateForm />
        <CustomFilter />
        <Parent />
        <ReadMoreContent />
        <ShowOrHidePassword />
        <UseRefHook />
        <Hangman />
        <Recharts />
        <ChipComponent />
        <TooltipComponent />
      </div>
    </div>
  );
}

export default ToDo;