<script setup>
import PlayerCard from '@/components/PlayerCard.vue'
import { usePlayerStore } from '@/stores/playerStore'
import FavouriteBtn from '@/components/FavouriteBtn.vue'

const store = usePlayerStore()
</script>

<template>
  <div class="page">
    <PlayerCard
      name="Neymar Junior"
      country="Brazil"
      club="Santos FC"
      position="Forward"
      :jersey="10"
      image="https://i.pinimg.com/736x/19/b8/e3/19b8e3d58fac81079b3edc0c3c98059c.jpg"
    />
  </div>
  <FavouriteBtn player="Neymar" />
  <p v-if="store.favorites.includes('Neymar')">❤️ Favorite Player</p>

  <p v-else>🤍 Not Favorite</p>
</template>

<style scoped>
p {
  font-family: var(--font-primary), sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary, #94a3b8);
  margin-top: 15px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
