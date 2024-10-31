<template>
    <div class="results-container">
      <h1>Riddle Quiz Results</h1>
      <div v-if="userResults.length">
        <table>
          <thead>
            <tr>
              <th>Attempt #</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(result, index) in userResults" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ result.score }} / {{ result.totalQuestions }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>No Result History</p>
      </div>
      <button @click="backToQuiz">
        {{ userResults.length ? "Take Quiz Again" : "Take Quiz!" }}
      </button>
    </div>
  </template>
  
  <script>
  import { useRiddleStore } from "@/stores/riddleStore";
  import { mapState } from "pinia";
  
  export default {
    name: "RiddleResultsView",
    computed: {
      ...mapState(useRiddleStore, ["getUserResults"]),
      userResults() {
        return this.getUserResults;
      },
    },
    methods: {
      backToQuiz() {
        this.$router.push("/riddles");
      },
    },
  };
  </script>
  
  <style scoped>
  .results-container {
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
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
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
  