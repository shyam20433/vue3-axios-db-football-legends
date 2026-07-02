<script setup>
import { provide } from 'vue'
import GrandChildBox from './GrandChildBox.vue'

provide('message', 'Hello from child')
</script>

<template>
  <div class="box-container child-box">
    <h2 class="box-title">Child Component (Provides hello from child)</h2>

    <GrandChildBox />
  </div>
</template>

<style scoped>
.box-container {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.child-box {
  border-left: 5px solid var(--color-accent, #f59e0b);
}

.box-title {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-accent, #fbbf24);
}
</style>
