import { defineStore } from 'pinia';

export const useRiddleStore = defineStore('riddle', {
  state: () => ({
    answers: {
      "What has keys but can't open locks?": "A piano",
      "What has to be broken before you can use it?": "An egg",
      "I’m tall when I’m young, and I’m short when I’m old. What am I?": "A candle",
      "What has hands but can’t clap?": "A clock",
    },
    userResponse: {},
    userResults: [],
  }),
  
  getters: {
    getAnswers: (state) => state.answers,
    getUserResponse: (state) => state.userResponse,
    getUserResults: (state) => state.userResults,
  },

  actions: {
    submitRiddleForm(userAnswers) {
      console.log(userAnswers)
      this.userResponse = userAnswers;
    
      this.calculateScore();
    },

    calculateScore() {
      let score = 0;
      const answerKeys = Object.keys(this.answers);
    
      for (const key of answerKeys) {
        if (this.userResponse[key] && this.userResponse[key].toLowerCase() === this.answers[key].toLowerCase()) {
          score++;
        }
      }
      console.log("Score calculated:", score); // Check the score
      console.log("Total Questions:", answerKeys.length); // Check total questions
    
      this.userResults.push({ score, totalQuestions: answerKeys.length });
      console.log("Current User Results:", this.userResults); // Log the results after updating
    
      this.userResponse = {};
    }
    
    
  },
});
