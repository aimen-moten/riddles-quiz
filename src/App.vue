<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/riddles">Riddle Quiz</RouterLink> |
        <RouterLink to="/riddle-results">Quiz Results</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log("App component has been mounted.");
  }
};
</script>

<style scoped>
header {
  text-align: center;
  margin-top: 20px;
}

nav a {
  margin: 0 10px;
  color: #42b983;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
