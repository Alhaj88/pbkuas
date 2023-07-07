<template>
  <h1>MyWidget</h1>
  <div class="navigation-container">
    <div class="navigation">
      <router-link class="nav-link" to="/location">Location</router-link>
      <router-link class="nav-link" to="/stopwatch">Stopwatch</router-link>
      <router-link class="nav-link" to="/weather">Weather</router-link>
    </div>
    <div class="game">
      <router-link class="nav-link" to="/tic-tac-toe">Game</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 0%;
  margin-bottom: 2%;
  font-size: 100px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.navigation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh;
}

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5px;
}

.game {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5px;
}

.nav-link {
  display: inline-block;
  padding: 10px;
  margin-right: 5px;
  background-color: #666;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-family: 'Comic sans ms';
}

.nav-link:hover {
  background-color: #eaeaea;
}
</style>