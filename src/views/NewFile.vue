<script setup>
import { RouterLink } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main>
    <HelloWorld msg="You did it in NewFile!" />
    <ul>
      <li><RouterLink to="/home/newfile/file1/fileid/1">newfile 1</RouterLink></li>
      <li><RouterLink to="/home/newfile/file3/fileid/3">newfile 3</RouterLink></li>
      <li><RouterLink to="/home/newfile/file4/fileid/4">newfile 4</RouterLink></li>
      <li><RouterLink to="/home/newfile/file5/fileid/5">newfile 5</RouterLink></li>
    </ul>
  </main>
</template>
