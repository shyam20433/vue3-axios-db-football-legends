<script setup>
import { usePlayerStore } from '@/stores/playerStore'

const props = defineProps({
  player: String
})

const store = usePlayerStore()

function addFavorite() {
  store.addPlayer(props.player)
}
</script>

<template>
  <button class="fav-btn" @click="addFavorite">
    <span class="heart-icon">❤️</span> Add to Favorites
  </button>
</template>

<style scoped>
.fav-btn {
  background: rgba(244, 63, 94, 0.1);
  border: 1px solid rgba(244, 63, 94, 0.4);
  color: #fb7185;
  font-family: var(--font-primary, sans-serif);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  margin-top: 15px;
}

.fav-btn:hover {
  background: rgba(244, 63, 94, 0.2);
  border-color: #f43f5e;
  box-shadow: 0 0 15px rgba(244, 63, 94, 0.3);
  transform: translateY(-2px);
}

.fav-btn:active {
  transform: translateY(0);
}

.heart-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.fav-btn:hover .heart-icon {
  transform: scale(1.2);
}
</style>
