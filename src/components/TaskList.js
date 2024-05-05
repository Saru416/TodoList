// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from './actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name}
          <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
