<script setup>
import BuiltinComponents from '../components/practice/BuiltinComponents.vue'

function onClick() {
  console.log('Клик в дочернем компоненте. Пойман по событию eventName')
}
</script>

<template>
  <div class="about">
    <h1></h1>
    <BuiltinComponents @event-name="onClick" msg="Етот пропс передан из родительского компонента" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
