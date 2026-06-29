<script setup>
import { inject } from 'vue'

const playerName = inject('playerName')
</script>

<template>
  <h2>{{ playerName }}</h2>
</template>
