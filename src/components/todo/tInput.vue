<template>
  <div class="field">
    <div class="field__title" v-show="!!title">{{ title }}</div>
    <div class="field__wrapper">
      <input
        class="field__input"
        type="text"
        v-model="currentValue"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "t-input",
  props: {
    value: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value() {
      this.currentValue = this.value;
    }
  }
};
</script>

<style scoped>
.field__title {
  margin: 0 0 8px 0;
}
.field__input {
  width: 100%;
  outline: none;
  background: #e6e9ef;
  border: 0;
}
.field__wrapper {
  padding: 12px 14px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background: #e6e9ef;
  margin-bottom: 8px;
}
</style>
