<!-- <script setup>
import BackBtn from '@/components/BackBtn.vue'
import { usePlayerStore } from '@/stores/playerStore'
</script>

<template>
  <div class="page">

    <BackBtn />

    <div class="container">
      <div>
        <img
          src="https://i.pinimg.com/736x/18/60/67/186067c3c81040a68a049b9344b9f995.jpg"
          alt="Cristiano Ronaldo"
          class="photo"
        />
      </div>

      <div class="details">
        <h1>Cristiano Ronaldo</h1>

        <p class="card"><strong>Country :</strong> Portugal</p>
        <p class="card"><strong>Club :</strong> Al Nassr FC</p>
        <p class="card"><strong>Position :</strong> Forward</p>
        <p class="card"><strong>Jersey :</strong> 7</p>
      </div>
    </div>

  </div>
  <FavouriteBtn player="Neymar" />
  <p v-if="store.favorites.includes('Neymar')">❤️ Favorite Player</p>

  <p v-else>🤍 Not Favorite</p>
</template>

<style src="@/assets/card_design.css"></style>
 -->



<script setup>
import PlayerCard from '@/components/PlayerCard.vue'
import FavouriteBtn from '@/components/FavouriteBtn.vue';
import { usePlayerStore } from '@/stores/playerStore'

const store = usePlayerStore()
</script>

<template>
  <div class="page">
    <PlayerCard
      name="Ronaldo"
      country="Portugal"
      club="Al Nasar"
      position="Forward"
      :jersey="7"
      image="https://i.pinimg.com/736x/18/60/67/186067c3c81040a68a049b9344b9f995.jpg"
    />
  </div>
  <FavouriteBtn player="Ronaldo" />
  <p v-if="store.favorites.includes('Ronaldo')">❤️ Favorite Player</p>

  <p v-else>🤍 Not Favorite</p>
</template>
