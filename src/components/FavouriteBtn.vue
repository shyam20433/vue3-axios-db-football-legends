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
  <button @click="addFavorite">
    ❤️ Add to Favorite
  </button>
</template>
