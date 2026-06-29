<script setup>
import { usePlayerStore } from '@/stores/playerStore'

const store = usePlayerStore()
</script>

<template>
  <div>
    <h1>Favourite Players</h1>

    <ul>
      <li
        v-for="player in store.favorites"
        :key="player"
      >
        {{ player }}
      </li>
    </ul>
  </div>
</template>
