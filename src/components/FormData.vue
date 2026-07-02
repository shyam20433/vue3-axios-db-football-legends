<!-- <script setup>

const data = defineProps({
  firstname:String,
  middlename:String,
  lastname:String
})


</script>

<template>

  <h1>
    firstname :{{ data.firstname }}
  </h1>
  <h1>
    Middle name:{{ data.middlename }}
  </h1>

  <h1>
    lastname :{{ data.lastname }}
  </h1>
</template> -->
<script setup>
const data = defineProps({
  names: Array
})
</script>

<template>
  <div class="entries-container">
    <div v-for="(name, index) in data.names" :key="index" class="entry-card">
      <div class="entry-row">
        <span class="entry-label">First Name:</span>
        <span class="entry-value">{{ name.firstname }}</span>
      </div>
      <div class="entry-row">
        <span class="entry-label">Middle Name:</span>
        <span class="entry-value">{{ name.middlename || '-' }}</span>
      </div>
      <div class="entry-row">
        <span class="entry-label">Last Name:</span>
        <span class="entry-value">{{ name.lastname }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.entries-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 30px;
}

.entry-card {
  background: var(--glass-bg, rgba(20, 26, 46, 0.65));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.entry-card:hover {
  transform: translateY(-3px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.1);
}

.entry-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.entry-row:last-child {
  border-bottom: none;
}

.entry-label {
  font-size: 0.85rem;
  color: var(--text-secondary, #94a3b8);
  font-weight: 500;
}

.entry-value {
  font-size: 1rem;
  color: var(--text-primary, #f8fafc);
  font-weight: 600;
}
</style>
