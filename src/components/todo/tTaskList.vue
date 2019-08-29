<template>
  <div class="task-list">
    <div class="task-item" v-for="task in taskList" :key="task.id">
      <div class="task-item__wrapper">
        <div class="task-item__control">
          <t-check-box v-model="task.complete" @change="editTask(task)"></t-check-box>
        </div>
        <div :class="['task-item__content', task.complete ? 'task-item__content_completed' : '']">
          <div class="task-item__title">{{ task.title }}</div>
          <div class="task-item__description">{{ task.description }}</div>
        </div>
        <div class="task-item__control" @click="setEditId(task.id)">
          <font-awesome-icon icon="edit" />
        </div>
        <div class="task-item__control" @click="removeTask(task.id)">
          <font-awesome-icon icon="trash-alt" />
        </div>
      </div>
      <div v-if="task.id === editId" class="task-item__edit-form">
        <t-form @submit="editId = 0" :task="{ ...task }"></t-form>
      </div>
    </div>
  </div>
</template>

<script>
import tCheckBox from "./tCheckBox";
import tForm from "./tForm";

export default {
  name: "t-task-list",
  components: {
    tCheckBox,
    tForm
  },
  data() {
    return {
      editId: 0
    };
  },
  methods: {
    /** Изменить задачу */
    editTask(task) {
      this.$store.dispatch("tasks/editTask", task);
    },
    /** Открываем форму редактирования для задачи с указанным ID */
    setEditId(id) {
      this.editId = this.editId === id ? 0 : id;
    },
    /** Удалить задачу */
    removeTask(id) {
      this.$store.dispatch("tasks/removeTask", id);
    }
  },
  computed: {
    taskList: {
      get() {
        const list = this.$store.getters["tasks/getTaskList"];
        return list.sort((a, b) => b.title.localeCompare(a.title));
      }
    }
  }
};
</script>

<style scoped>
.task-list {
  max-height: 600px;
  overflow: auto;
}
.task-item {
  padding: 10px 0;
  border-bottom: dashed 1px #98a5c3;
}
.task-item__wrapper {
  display: grid;
  grid-template-columns: 26px 1fr 26px 26px;
}
.task-item__content {
  margin: 0 0 0 15px;
  overflow: hidden;
}
.task-item__title {
  font-weight: 600;
}
.task-item__control {
  display: flex;
  justify-content: center;
  align-items: center;
}
.task-item__control svg {
  cursor: pointer;
}
.task-item__edit-form {
  margin: 15px 0 0 0;
}
.task-item__content_completed {
  color: #ccc;
  text-decoration: line-through;
}
</style>
