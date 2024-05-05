export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = (taskName) => ({
  type: ADD_TASK,
  payload: {
    name: taskName,
    id: new Date().getTime().toString(),
  },
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: {
    id: taskId,
  },
});
