<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(question, index) in Object.keys(questions)" :key="index">
      <label :for="'question' + index">{{ question }}</label>
      <input
        type="text"
        v-model="response[question]"
        :id="'question' + index"
      />
    </div>
    <p v-if="!validateForm">Please fill out all answers</p>
    <button :disabled="!validateForm">Submit</button>
  </form>
</template>

<script>
export default {
  name: "RiddleForm",
  emits: ["submit"],
  data() {
    return {
      response: {},
      questions: {
        "What has keys but can't open locks?": "",
        "What has to be broken before you can use it?": "",
        "I’m tall when I’m young, and I’m short when I’m old. What am I?": "",
        "What has hands but can’t clap?": "",
      },
    };
  },
  computed: {
    validateForm() {
      return Object.values(this.response).every(
        (value) => value && value.trim() !== ""
      );
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.response);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
}

label,
input {
  margin-bottom: 0.5em;
}

button {
  margin-top: 1em;
}
</style>
