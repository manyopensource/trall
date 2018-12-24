import { createSelector } from 'reselect';

const tasksSelector = state => state.tasks;
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
