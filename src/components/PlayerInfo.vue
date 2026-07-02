<script setup>
import { inject } from 'vue'

const playerName = inject('playerName')
</script>

<template>
  <h2 class="player-info-title">{{ playerName }}</h2>
</template>

<style scoped>
.player-info-title {
  font-family: var(--font-primary, sans-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary, #6366f1);
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
  margin: 10px 0;
}
</style>
