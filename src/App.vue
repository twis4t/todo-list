<template>
  <div id="app">
    <div class="main">
      <div class="main__wrapper">
        <t-title>ToDo Список задач</t-title>
        <div class="todo">
          <t-input v-model="title"></t-input>
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
import tInput from "./components/todo/tInput";

export default {
  name: "app",
  data() {
    return {
      title: ""
    };
  },
  components: {
    tTitle,
    tForm,
    tInput
  }
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
  color: #2c3e50;
  background: linear-gradient(-45deg, #d3cce3, #e9e4f0);
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
  width: 600px;
}
.todo {
  background: #fff;
  padding: 15px;
  margin: 15px 0;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
.contacts {
  text-align: center;
  font-size: smaller;
  color: #9186a9;
}
</style>
