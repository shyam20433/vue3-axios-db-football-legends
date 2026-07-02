<script setup>
import { ref } from 'vue'
import footballService from '@/services/footballService'

import BackBtn from '@/components/BackBtn.vue'
import router from '@/router'

function goHome() {
  router.push('/')
}
const players = ref([])
const player = ref({})

//add players ku aana variable

const id = ref('')
const name = ref('')
const country = ref('')
const club = ref('')
const jersey = ref('')
const image = ref('')
const position = ref('')

async function getPlayers() {
  players.value = await footballService.getPlayers()
}
async function getPlayer() {
  player.value = await footballService.getPlayer(id.value)
}

async function addPlayer() {
  const newPlayer = {
    name: name.value,
    country: country.value,
    club: club.value,
    position: position.value,
    jersey: jersey.value,
    image: image.value,
  }

  await footballService.addPlayer(newPlayer)
  alert(`player added successfully !!`)
  await getPlayers()
}

async function updatePlayer() {
  const newPlayer = {
    name: name.value,
    country: country.value,
    club: club.value,
    position: position.value,
    jersey: jersey.value,
    image: image.value,
  }

  await footballService.updatePlayer(id.value, newPlayer)
  alert(`player Updated successfully !!`)
  await getPlayers()
}

async function deletePlayer() {
  await footballService.deletePlayer(id.value)

  alert('Player Deleted Successfully')
  await getPlayers()
}
</script>

<template>
  <BackBtn @back="goHome" />
  <table>
    <tr>
      <th>
        <label>Player ID</label>
      </th>
      <th>
        <input v-model="id" type="text" />
      </th>
    </tr>

    <tr>
      <th>
        <label>Player Name</label>
      </th>
      <th>
        <input v-model="name" type="text" />
      </th>
    </tr>
    <tr>
      <th><label>Player Country</label></th>

      <th><input v-model="country" type="text" /></th>
    </tr>
    <tr>
      <th><label>Player Club</label></th>
      <th><input v-model="club" type="text" /></th>
    </tr>
    <tr>
      <th><label>Player Jersey</label></th>
      <th><input v-model="jersey" type="number" /></th>
    </tr>
    <tr>
      <th><label>Player position</label></th>
      <th><input v-model="position" type="text" /></th>
    </tr>
    <tr>
      <th><label>Image URL</label></th>
      <th><input v-model="image" type="text" /></th>
    </tr>
  </table>
  <br />

  <button @click="getPlayers">Get All Players</button>
  <br />

  <button @click="getPlayer">Get Player By ID</button>
  <br />

  <button @click="addPlayer">Add Player</button><br />

  <button @click="updatePlayer">Update Player</button>
  <br />
  <button @click="deletePlayer">Delete Player</button>
  <div id="container">
    <div>
      <h1>All players</h1>

      <div id="playercards" v-for="player in players" :key="player.id">
        <div id="inner">
          <p class="labels">Id : {{ player.id }}</p>
          <p class="labels">Name : {{ player.name }}</p>
          <p class="labels">Country : {{ player.country }}</p>
          <p class="labels">Club : {{ player.club }}</p>
          <p class="labels">Position : {{ player.position }}</p>
          <p class="labels">Jersey : {{ player.jersey }}</p>
        </div>

        <div>
          <br />
          <br />
          <img id="photo" :src="player.image" width="150" />
        </div>
      </div>
    </div>
    <div>
      <h1>Selected Player</h1>
      <div id="inner2">
        <div>
          <p class="labels">Id : {{ player.id }}</p>
          <p class="labels">Name : {{ player.name }}</p>
          <p class="labels">Country : {{ player.country }}</p>
          <p class="labels">Club : {{ player.club }}</p>
          <p class="labels">Position : {{ player.position }}</p>
          <p class="labels">Jersey : {{ player.jersey }}</p>
        </div>
        <div>
          <img id="photo" :src="player.image" width="150" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
table {
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
  border-collapse: separate;
  border-spacing: 0 10px;
}

th {
  text-align: left;
  font-weight: normal;
  padding: 0;
}

label {
  font-family: var(--font-primary), sans-serif;
  color: var(--text-secondary, #94a3b8);
  font-weight: 500;
  font-size: 0.95rem;
}

input {
  width: 100%;
  padding: 10px 16px;
  border-radius: 10px;
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
  background: linear-gradient(135deg, var(--color-primary, #6366f1) 0%, #4f46e5 100%);
  color: var(--text-primary, #ffffff);
  font-family: var(--font-primary), sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: 5px 8px 15px 0;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

button:hover {
  background: linear-gradient(135deg, var(--color-primary-hover, #818cf8) 0%, #6366f1 100%);
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.4);
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

#container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
  margin-top: 30px;
}

h1 {
  font-family: var(--font-primary), sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary, #f8fafc);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 8px;
}

#playercards {
  display: flex;
  background: var(--glass-bg, rgba(20, 26, 46, 0.65));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  border-radius: 16px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  justify-content: space-between;
}

#playercards:hover {
  border-color: rgba(99, 102, 241, 0.25);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.1);
  transform: translateX(4px);
}

#inner {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  align-items: flex-start;
}

.labels {
  color: var(--text-secondary, #94a3b8);
  font-family: var(--font-primary), sans-serif;
  font-size: 0.95rem;
  margin: 2px 0;
}

#photo {
  height: 100%;
  min-height: 140px;
  width: 130px;
  object-fit: cover;
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

#inner2 {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(245, 158, 11, 0.02) 100%);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  display: flex;
  padding: 20px;
  gap: 20px;
  justify-content: space-between;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
}

#inner2 div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}

@media (max-width: 900px) {
  #container {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- <h1>Football Players API</h1>


  <button @click="getPlayers">
    <ul>

    <li v-for="player in players"
        :key="player.id">

        {{ player.name }}

    </li>

</ul>
get players
  </button>


<label for="playerid">enter id </label>
<input type="number">
  <button @click="getPlayer" id="playerid">
    <ul>

    <li v-for="play in player"
        :key="play.id">

        {{ play.name }}

    </li>

</ul>
get players by Id
  </button>
</template>
 -->
