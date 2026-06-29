<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>

<template>
  <div>
    <h2>Grand Child Component</h2>
    <br><br><br>

    <p>{{ message }}</p>
  </div>
</template>
