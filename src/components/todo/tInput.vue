<template>
  <form action>
    <input
      class="field"
      type="text"
      v-model="currentValue"
      @input="$emit('input', $event.target.value)"
    />
  </form>
</template>

<script>
export default {
  name: "t-input",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  }
};
</script>

<style scoped>
.field {
  display: block;
  padding: 12px 14px;
  border: solid 1px #d6cfe4;
  background: #fcfaff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  outline: none;
}
</style>