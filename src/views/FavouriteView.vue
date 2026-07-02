<script setup>
import { usePlayerStore } from '@/stores/playerStore'
import BackBtn from '@/components/BackBtn.vue';
import router from '@/router';
const store = usePlayerStore()

function goHome() {
  router.push('/')
}

</script>

<template>
  <div class="favs-container">
    <h1 class="favs-title">Favorite Players</h1>

    <ul class="favs-list">
      <li
        v-for="player in store.favorites"
        :key="player"
        class="favs-item"
      >
        <span class="star-bullet">⭐</span> {{ player }}
      </li>
    </ul>
    <BackBtn  @back="goHome"/>
  </div>
</template>

<style scoped>
.favs-container {
  background: var(--glass-bg, rgba(20, 26, 46, 0.65));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  margin: 30px auto;
  box-shadow: var(--shadow-premium, 0 10px 40px -10px rgba(0, 0, 0, 0.7));
}

.favs-title {
  font-family: var(--font-primary), sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary, #f8fafc);
  margin-top: 0;
  margin-bottom: 25px;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.favs-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.favs-item {
  font-family: var(--font-primary), sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary, #f8fafc);
  padding: 12px 18px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.favs-item:hover {
  transform: translateX(5px);
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.3);
}

.star-bullet {
  font-size: 1.1rem;
}
</style>
