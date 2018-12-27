import { createSelector } from 'reselect';

const getListIdSelector = (state, id) => id;
const tasksSelector = state => state.tasks;
const commentsSelector = state => state.comments;
const openTaskIdSelector = state => state.global.openTaskId;

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

export const getLastCommentId = state => {
  let maxId = 0;
  state.comments.forEach(task => {
    if (task.id > maxId) {
      maxId = task.id;
    }
  });
  return maxId;
};

export const getTaskById = createSelector(tasksSelector, openTaskIdSelector, (tasks, id) => tasks.find(task => task.id === id));
export const getCommentsByTaskId = createSelector(commentsSelector, openTaskIdSelector, (comments, id) => comments.filter(comment => comment.taskId === id));