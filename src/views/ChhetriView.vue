<!-- <script setup>
import BackBtn from '@/components/BackBtn.vue'

</script>

<template>
  <div class="page">

    <BackBtn />

    <div class="container">
      <div>
        <img
          src="https://i.pinimg.com/736x/84/a9/d9/84a9d9d8a22c9a6b554e5496e4aef995.jpg"
          alt="Sunil Chhetri"
          class="photo"
        />
      </div>

      <div class="details">
        <h1>Sunil Chhetri</h1>

        <p class="card"><strong>Country :</strong> India</p>
        <p class="card"><strong>Club :</strong> Bengaluru FC</p>
        <p class="card"><strong>Position :</strong> Forward</p>
        <p class="card"><strong>Jersey :</strong> 11</p>
      </div>
    </div>

  </div>
  <FavouriteBtn player="Neymar" />
  <p v-if="store.favorites.includes('chh')">❤️ Favorite Player</p>

  <p v-else>🤍 Not Favorite</p>
</template>

<style src="@/assets/card_design.css"></style>
 -->


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
      name="Sunnil Chhetri"
      country="India"
      club="Bengulur Fc"
      position="Forward"
      :jersey="10"
      image="https://i.pinimg.com/736x/84/a9/d9/84a9d9d8a22c9a6b554e5496e4aef995.jpg"
    />
  </div>
  <FavouriteBtn player="Sunnil Chhetri" />
  <p v-if="store.favorites.includes('Sunnil Chhetri')">❤️ Favorite Player</p>

  <p v-else>🤍 Not Favorite</p>
</template>
