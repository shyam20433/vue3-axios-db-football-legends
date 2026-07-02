<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>

<template>
  <div class="box-container grandchild-box">
    <h2 class="box-title">Grandchild Component</h2>
    <div class="message-wrapper">
      <span class="message-label">Injected Value:</span>
      <p class="message-content">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.box-container {
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 8px;
  padding: 16px;
  margin-top: 15px;
}

.grandchild-box {
  border-left: 5px solid #10b981;
}

.box-title {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.05rem;
  font-weight: 700;
  color: #34d399;
}

.message-wrapper {
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px dashed rgba(16, 185, 129, 0.3);
  display: flex;
  align-items: center;
  gap: 10px;
}

.message-label {
  font-size: 0.85rem;
  color: #a7f3d0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.message-content {
  margin: 0;
  font-size: 1.1rem;
  color: #10b981;
  font-weight: 700;
}
</style>
