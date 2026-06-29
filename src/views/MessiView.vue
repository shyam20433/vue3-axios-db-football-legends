<!-- <script setup>
import BackBtn from '@/components/BackBtn.vue'
</script>

<template>
  <div class="page">

    <BackBtn />

    <div class="container">
      <div>
        <img
        src="https://i.pinimg.com/736x/a6/cc/0a/a6cc0a9b88145eb67a9239d6cfa10590.jpg"
        alt="Lionel Messi"
        class="photo"
      />
      </div>

      <div class="details">
        <h1>Messi</h1>

        <p class="card"><strong>Country :</strong> Argentina</p>
        <p  class="card"><strong>Club :</strong> Inter Miami CF</p>
        <p  class="card"><strong>Position :</strong> Forward</p>
        <p class="card"><strong>Jersey :</strong> 10</p>
      </div>

    </div>

  </div>
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
      name="Ankara Messi"
      country="Argentina"
      club="Inter Miami"
      position="Forward"
      :jersey="10"
      image="https://i.pinimg.com/736x/a6/cc/0a/a6cc0a9b88145eb67a9239d6cfa10590.jpg"
    />
  </div>
  <FavouriteBtn player="Ankara Messi" />
  <p v-if="store.favorites.includes('Ankara Messi')">❤️ Favorite Player</p>

  <p v-else>🤍 Not Favorite</p>
</template>
