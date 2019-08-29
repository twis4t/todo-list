export default {
  /**
   * Добавление задачи в список
   * @param {Object} context Store context
   * @param {Object} task Задача
   * @return {Promise}
   */
  createTask(context, task) {
    return new Promise(resolve => {
      /** Эмитируем уникальный идентификатор задачи */
      const id = Date.now();
      task.id = id;
      context.commit("createTask", task);
      resolve(task);
    });
  },

  /**
   * Редактирование задачи
   * @param {Object} context Store context
   * @param {Object} task Задача
   * @return {Promise}
   */
  editTask(context, task) {
    return new Promise(resolve => {
      let tasks = context.getters["getTaskList"];
      tasks = tasks.map(item => (item.id === task.id ? task : item));
      context.commit("setTaskList", tasks);
      resolve(task);
    });
  },

  /**
   * Удаление задачи
   * @param {Object} context Store context
   * @param {Integer} id ID задачи
   * @return {Promise}
   */
  removeTask(context, id) {
    return new Promise(resolve => {
      let tasks = context.getters["getTaskList"];
      tasks = tasks.filter(item => item.id !== id);
      context.commit("setTaskList", tasks);
      resolve(true);
    });
  }
};
