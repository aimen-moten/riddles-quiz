<template>
  <div class="quiz-container">
    <h1>Riddle Quiz</h1>
    <RiddleForm @submit="submit" />
  </div>
</template>

<script>
import RiddleForm from "@/components/RiddleForm.vue";
import { useRiddleStore } from "@/stores/riddleStore";
import { mapActions } from "pinia";

export default {
  name: "RiddlesView",
  components: {
    RiddleForm,
  },
  methods: {
    ...mapActions(useRiddleStore, ["submitRiddleForm"]),
    submit(response) {
      console.log("Form Submitted");
      this.submitRiddleForm(response); // Compute and save score in store
      this.$router.push("/riddle-results");
    },
  },
};
</script>

<style scoped>
.quiz-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #42b983;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

p {
  color: #ff3333;
  font-weight: bold;
}
</style>
