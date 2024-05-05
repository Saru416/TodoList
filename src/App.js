import React from 'react';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from redux toolkit
import { Provider } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import rootReducer from './components/reducers';
import "./App.css"

const store = configureStore({ reducer: rootReducer }); // Pass rootReducer as reducer property

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>To-Do List</h1>
        <div className='Input'>
          <TaskInput />
        </div>
        <div className='List'> 
          <TaskList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
