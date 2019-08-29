<template>
  <div class="task-form">
    <t-input
      v-model.trim="currentTask.title"
      title="Название"
      placeholder="Введите название задачи"
      @keyup.enter.native="submit()"
    ></t-input>
    <t-input
      v-model.trim="currentTask.description"
      title="Описание задачи"
      placeholder="Введите описание задачи"
      @keyup.enter.native="submit()"
    ></t-input>

    <div class="task-form__actions">
      <button
        :class="['form-button', formValid ? '' : 'form-button_disabled', task.id ? 'form-button_green' : 'form-button_blue']"
        @click="submit()"
      >{{ task.id ? 'Сохранить' : 'Добавить' }}</button>
    </div>
  </div>
</template>

<script>
import tInput from "./tInput";

export default {
  name: "t-form",
  props: {
    task: {
      type: Object,
      default: function() {
        return {
          title: "",
          description: "",
          id: 0
        };
      }
    }
  },
  data() {
    return {
      currentTask: this.task
    };
  },
  components: {
    tInput
  },
  computed: {
    /** Валидация заполнения данных */
    formValid() {
      return !!this.currentTask.title && !!this.currentTask.description;
    }
  },
  methods: {
    /** Запись данных */
    submit() {
      if (this.formValid) {
        if (this.currentTask.id > 0) {
          /** Редактируем задачу */
          this.editTask(this.currentTask);
        } else {
          /** Создаем задачу */
          this.createTask(this.currentTask);
          this.currentTask.title = "";
          this.currentTask.description = "";
          this.currentTask.id = 0;
        }
        this.$emit("submit", this.currentTask);
      }
    },
    /** Сохранение задачи */
    createTask(task) {
      this.$store.dispatch("tasks/createTask", { ...task });
    },
    /** Редактирование задачи */
    editTask(task) {
      this.$store.dispatch("tasks/editTask", { ...task });
    }
  }
};
</script>

<style scoped>
.task-form__actions {
  text-align: right;
  padding: 10px 0;
}
.form-button {
  padding: 10px 14px;
  border: none;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
}
.form-button_blue {
  background: #2196f3;
}
.form-button_green {
  background: #4caf50;
}
.form-button_disabled {
  background: #bec2cc;
  cursor: default;
}
</style>
