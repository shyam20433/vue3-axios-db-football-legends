<script setup>
import { provide } from 'vue'
import ChildBox from './ChildBox.vue'

provide('message', 'Hello from Parent')
</script>

<template>
  <div class="box-container parent-box">
    <h2 class="box-title">Parent Component (Provides message)</h2>

    <ChildBox />
  </div>
</template>

<style scoped>
.box-container {
  background: var(--glass-bg, rgba(20, 26, 46, 0.65));
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin: 15px 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.parent-box {
  border-left: 5px solid var(--color-primary, #6366f1);
  max-width: 600px;
  width: 100%;
}

.box-title {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary, #818cf8);
}
</style>
