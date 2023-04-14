<script setup>
import HelloWorld from '../components/HelloWorld.vue'
// import ComponentFile from '../components/practice/ComponentFile.vue'
</script>

<template>
  <main>
    <HelloWorld msg="You did it in HomeView!" />
    <h1>it's card {{ $route.params.id }}</h1>
    <ul>
      <li><RouterLink to="/home/1">film card 1</RouterLink></li>
      <li><RouterLink to="/home/2">film card 2</RouterLink></li>
      <li><RouterLink to="/home/3">film card 3</RouterLink></li>
      <li><RouterLink to="/home/4">film card 4</RouterLink></li>
      <li><RouterLink to="/home/newfile">More information page</RouterLink></li>
    </ul>

    <!-- <ComponentFile /> -->
    <RouterView />
  </main>
</template>
