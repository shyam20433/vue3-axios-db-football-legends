<!-- <template>

</template>

<script>

</script>



 -->

<script setup>
import FormData from '@/components/FormData.vue'
import { ref } from 'vue'
const a = ref('')
const b = ref('')
const c = ref('')

const names=ref([])

function addName(){
  names.value.push({
    firstname : a.value,
    middlename:b.value,
    lastname:c.value

})
  a.value=""
  b.value=""
  c.value=""

}

</script>

<template>


  <table>

    <tr>
      <th>
        <label>firstname</label>
      </th>
      <th>
        <input v-model="a" type="text" />
      </th>
      <th>
        {{ a }}
      </th>
    </tr>
    <tr>
      <th>
        <label>middle name</label>
      </th>
      <th>
        <input v-model="b" type="text" />
      </th>
      <th>
        {{ b }}
      </th>
    </tr>
    <tr>
      <th>
        <label>lastname</label>
      </th>
      <th>
        <input v-model="c" type="text" />
      </th>
      <th>
        {{ c }}
      </th>
    </tr>
    <tr>
      <th>
        <button @click="addName">submit</button>
      </th>
    </tr>
  </table>
  <FormData :names="names" />

</template>

<style scoped>
table {
  width: 100%;
  max-width: 500px;
  margin: 30px auto;
  border-collapse: separate;
  border-spacing: 0 12px;
  background: var(--glass-bg, rgba(20, 26, 46, 0.65));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  border-radius: 20px;
  padding: 30px;
  box-shadow: var(--shadow-premium, 0 10px 40px -10px rgba(0, 0, 0, 0.7));
}

th {
  text-align: left;
  font-weight: normal;
  padding: 0;
  vertical-align: middle;
}

th:nth-child(3) {
  padding-left: 20px;
  color: var(--color-primary-hover, #818cf8);
  font-weight: 500;
  font-size: 0.95rem;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

label {
  font-family: var(--font-primary), sans-serif;
  color: var(--text-secondary, #94a3b8);
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input {
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-primary, #f8fafc);
  font-family: var(--font-primary), sans-serif;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--color-primary, #6366f1);
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.25);
}

button {
  width: 100%;
  background: linear-gradient(135deg, var(--color-primary, #6366f1) 0%, #4f46e5 100%);
  color: var(--text-primary, #ffffff);
  font-family: var(--font-primary), sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.25);
  transition: all 0.3s ease;
  margin-top: 10px;
}

button:hover {
  background: linear-gradient(135deg, var(--color-primary-hover, #818cf8) 0%, #6366f1 100%);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}
</style>



