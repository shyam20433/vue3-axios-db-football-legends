<script setup>
import { provide } from 'vue'
import GrandChildBox from './GrandChildBox.vue'

provide('message', 'Hello from child')
</script>

<template>
  <div>
    <h2>Child Component</h2>

    <GrandChildBox />
  </div>
</template>
