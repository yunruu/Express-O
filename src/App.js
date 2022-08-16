import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
// import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, } from "firebase/firestore";
// import { db } from "./firebase";
// import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Calendar from './components/Calendar';
import Categories from './components/Categories';
import EditTask from './components/EditTask';
import User from './components/User';
import TodoList from './components/TodoList';
import Logout from './components/Logout';

function App() {

  return (
    <div className='App'>
      <Sidebar>
        <User />
        <AddTask />
        <Calendar />
        <Categories />
        <Logout />
      </Sidebar>

      <Main>
        <TodoList />
        <EditTask />
      </Main>
    </div>
  )
}

export default App;
