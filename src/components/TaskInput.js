// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      dispatch(addTask(taskName));
      setTaskName('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
