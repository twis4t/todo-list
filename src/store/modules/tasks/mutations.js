export default {
  createTask(state, data) {
    state.taskList.push(data);
  },
  setTaskList(state, data) {
    state.taskList = [...data];
  }
};
