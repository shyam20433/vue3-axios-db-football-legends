<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 800;
  font-size: 2.8rem;
  letter-spacing: -1px;
  background: linear-gradient(135deg, var(--color-primary, #6366f1) 30%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
  color: var(--text-secondary, #94a3b8);
  font-weight: 400;
  text-align: center;
}

@media (min-width: 1024px) {
  h1, h3 {
    text-align: left;
  }
}
</style>
