import { createSelector } from 'reselect';

const tasksSelector = state => state.tasks;
const getTaskIdSelector = (state, id) => id;
const getListIdSelector = (state, id) => id;

export const createGetTasksByListId = () => {
  return createSelector(
    tasksSelector,
    getListIdSelector,
    (tasks, id) => {
      return tasks.filter(task => task.listId === id);
    }
  );
};

export const getUsers = state => state.users;

export const getLastTaskId = state => {
  let maxId = 0;
  state.tasks.forEach(task => {
    if (task.id > maxId) {
      maxId = task.id;
    }
  });
  return maxId;
};

export const getTaskById = state => {
  return createSelector(
    getTaskIdSelector,
    id => state.tasks.filter(task => task.id === id)
  )
};
