<script setup>
import { useRouter } from 'vue-router'
import BackBtn from '@/components/BackBtn.vue'
const router = useRouter()

function goHome() {
  router.push('/')
}

const props = defineProps({
  name: String,
  country: String,
  club: String,
  position: String,
  jersey: Number,
  image: String
})


</script>

<template>
  <div class="page">

    <BackBtn  @back="goHome"/>


    <div class="container">
      <div>
        <img
          :src="props.image"
          :alt="props.name"
          class="photo"
        />
      </div>

      <div class="details">
        <h1>{{ props.name }}</h1>

        <p class="card">
          <strong>Country :</strong> {{ props.country }}
        </p>

        <p class="card">
          <strong>Club :</strong> {{ props.club }}
        </p>

        <p class="card">
          <strong>Position :</strong> {{ props.position }}
        </p>

        <p class="card">
          <strong>Jersey :</strong> {{ props.jersey }}
        </p>
      </div>
    </div>

  </div>
</template>

<style src="@/assets/card_design.css"></style>
