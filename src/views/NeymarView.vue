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
