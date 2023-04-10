<script setup>
// import SharedLayout from './SharedLayout/SharedLayout.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import HomeView from './views/HomeView.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navigation">
        <ul>
          <li>
            <RouterLink class="link" to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink class="link" to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- <Suspense>
    <template #fallback><h2>Loading...</h2></template>
    <slot></slot>
  </Suspense> -->

  <RouterView />
</template>

<style scoped>
.link {
  padding: 4px;
  color: #1f2833;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  border: #1f2833;
  border-radius: 5px;
}

.link:hover,
.link:focus {
  color: #0260d6;
  border: 1px solid #0260d6;
}

.navigation {
  font-size: 16px;
  box-shadow: 1px 1px 4px 5px rgba(31, 40, 51, 0.4);
  padding: 20px 20px;
  background-color: 1px 1px 4px 5px rgba(31, 40, 51, 0.4);
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  gap: 10px;
}

header {
  color: #1f2833;
}
</style>
