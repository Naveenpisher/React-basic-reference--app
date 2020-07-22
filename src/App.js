import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Component/header';
import AddTodo from './Component/AddTodo';
import TodoList from './Component/TodoList';
import Footer from './Component/Footer';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState({ id: '', taskName: '' });
  const [showClrBtn, setshowClrBtn] = useState(false);

  const addNewTask = () => {
    const newTask = {
      taskName: task.taskName
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    };
    fetch('http://localhost:8000/api/todoApp', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        getTodoList();
      });
  }
  const setTaskValue = (task) => {
    setTask(task)
  }
  useEffect(() => {
    getTodoList()
  }, [])
  const getTodoList = () => {
    fetch('http://localhost:8000/api/todoApp')
      .then(response => response.json())
      .then(data => {
        if (data) { setList(data) }
      }).catch(err => console.log(err));
  }
  const editTask = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    };
    console.log(task)
    fetch(`http://localhost:8000/api/todoApp/${task.id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        clearTodo();
        getTodoList();
      });
  }
  const editPatch = (task) => {
    console.log(task);
    setTask(task);
    setshowClrBtn(true)
  }

  const deletTask = (task) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };
    fetch(`http://localhost:8000/api/todoApp/${task.id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        getTodoList();
      });
  }

  const clearTodo = () => {
    setTask({ id: '', taskName: '' });
    setshowClrBtn(false)
  }

  return (
    <div className="App container">
      <div>
        <Header />
        <AddTodo task={task}
          setTask={setTaskValue} addNewTask={addNewTask}
          clearTodo={clearTodo}
          editTask={editTask}
          showBtn={showClrBtn} />
        <TodoList todo={list} editPatch={editPatch} deleteToTask={deletTask} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
