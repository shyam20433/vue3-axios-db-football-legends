<script setup>
import { provide } from 'vue'
import ChildBox from './ChildBox.vue'

provide('message', 'Hello from Parent')
</script>

<template>
  <div>
    <h2>Parent Component</h2>

    <ChildBox />
  </div>
</template>
