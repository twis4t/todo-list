<template>
  <div id="app">
    <div class="main">
      <div class="main__wrapper">
        <t-title>{{ title }}</t-title>
        <div class="todo">
          <t-form></t-form>
          <t-task-list></t-task-list>
        </div>
        <div class="contacts">
          В. Жегалов |
          <a href="https://github.com/twis4t">GitHub: twis4t</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tTitle from "./components/todo/tTitle";
import tForm from "./components/todo/tForm";
import tTaskList from "./components/todo/tTaskList";

export default {
  name: "app",
  data() {
    return {
      title: "Список задач"
    };
  },
  components: {
    tTitle,
    tForm,
    tTaskList
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: linear-gradient(#fff, #eef2f7);
  box-sizing: box-sizing;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.main__wrapper {
  width: 500px;
}
.todo {
  background: #fff;
  padding: 24px;
  margin: 15px 0;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  border: solid 3px #e6e9ef;
  box-shadow: 0 0 20px 0px #e2e2e2;
}
.contacts {
  text-align: center;
  font-size: smaller;
  color: #9186a9;
}
</style>
