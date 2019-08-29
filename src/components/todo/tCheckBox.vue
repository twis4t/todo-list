<template>
  <div :title="title" :class="['checkbox', value ? 'checkbox_checked' : '']" @click="change()"></div>
</template>

<script>
export default {
  name: "t-check-box",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: this.checked
    };
  },
  methods: {
    change() {
      this.value = !this.value;
      this.$emit("change", this.value);
    }
  },
  watch: {
    checked() {
      this.value = this.checked;
    }
  }
};
</script>

<style scoped>
.checkbox {
  transition: all 0.2s;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border: 2px solid #73767d;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.checkbox_checked {
  background: #4caf50;
  border: 2px solid #4caf50;
}
</style>
