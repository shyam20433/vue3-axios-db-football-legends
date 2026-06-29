<!-- <template>
  <div id="outer">
    <div id="container">
      <div>
        <img
          src="https://i.pinimg.com/736x/19/b8/e3/19b8e3d58fac81079b3edc0c3c98059c.jpg"
          alt="Neymar jr"
          id="photo"
        />
      </div>

      <div class="details">
        <p class="card"><strong>Country :</strong> Brazil</p>
        <p class="card"><strong>Club :</strong> Santos FC</p>
        <p class="card"><strong>Position :</strong> Forward</p>
        <p class="card"><strong>Jersey :</strong> 10</p>
      </div>
    </div>
    <div id="container">
      <div>
        <img
          src="https://i.pinimg.com/736x/18/60/67/186067c3c81040a68a049b9344b9f995.jpg"
          alt="Neymar jr"
          id="photo"
        />
      </div>

      <div class="details">
        <p class="card"><strong>Country :</strong> Portugal</p>
        <p class="card"><strong>Club :</strong> Al Nassr FC</p>
        <p class="card"><strong>Position :</strong> Forward</p>
        <p class="card"><strong>Jersey :</strong> 7</p>
      </div>
    </div>
    <div id="container">
      <div>
        <img
          src="https://i.pinimg.com/736x/84/a9/d9/84a9d9d8a22c9a6b554e5496e4aef995.jpg"
          alt="Neymar jr"
          id="photo"
        />
      </div>

      <div class="details">
        <p class="card"><strong>Country :</strong> India</p>
        <p class="card"><strong>Club :</strong> Bengaluru FC</p>
        <p class="card"><strong>Position :</strong> Forward</p>
        <p class="card"><strong>Jersey :</strong> 11</p>
      </div>
    </div>
    <div id="container">
      <div>
        <img
          src="https://i.pinimg.com/736x/a6/cc/0a/a6cc0a9b88145eb67a9239d6cfa10590.jpg"
          alt="Neymar jr"
          id="photo"
        />
      </div>

      <div class="details">
        <p class="card"><strong>Country :</strong> Argentina</p>
        <p class="card"><strong>Club :</strong> Inter Miami CF</p>
        <p class="card"><strong>Position :</strong> Forward</p>
        <p class="card"><strong>Jersey :</strong> 10</p>
      </div>
    </div>
  </div>


  <div>
    <h1>Football Legends</h1>

    <router-link to="/neymar">Neymar</router-link><br><br>

    <router-link to="/messi">Messi</router-link><br><br>

    <router-link to="/ronaldo">Ronaldo</router-link><br><br>

    <router-link to="/chhetri">Sunil Chhetri</router-link>
  </div>
</template>

<style>
#outer {
  padding: -10px;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 20px;
}

#container {
  width: 350px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: rgb(255, 153, 0);
  border-radius: 10px;
}

#photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.card {
  font-family: 'Times New Roman', Times, serif;
  font-size: larger;
  font-weight: bold;
  color: black;
}
</style>
<script setup>
let player = 'Neymar'
let goals = 25
let assists = 10

let total = goals + assists

console.log(player)
console.log(total)
</script>

<script setup>
function c() {
  console.log("Inside C");
}

function b() {
  console.log("Inside B");
  c();
}

function a() {
  console.log("Inside A");
  b();
}

a();
</script>

<template>
  <h1>Step Into / Step Over / Step Out Demo</h1>
</template>
 -->

<template>
  <div class="container">
    <h1 id="h1">Football Legends</h1>

    <router-link to="/neymar" class="did">Neymar</router-link><br /><br />

    <router-link to="/messi" class="did">Messi</router-link><br /><br />

    <router-link to="/ronaldo" class="did">Ronaldo</router-link><br /><br />

    <router-link to="/chhetri" class="did">Sunil Chhetri</router-link>
    <router-link to="/favorites" class="did"> ❤️ Favourite Players </router-link>
  </div>
</template>
<style>
.did {
  font-family: 'Times New Roman', Times, serif;
  color: rgb(0, 0, 0);
  font-size: large;
  font-weight: bolder;
  font-style: italic;
}

.container {
  padding: 20px;
  border-radius: 10px;
  height: fit-content;
  width: fit-content;
  display: flex;

  background-color: rgb(255, 255, 255);
}
#h1 {
  font-family: 'Times New Roman', Times, serif;
  color: rgb(255, 0, 0);
  font-size: large;
  font-weight: bolder;
  font-style: italic;
}
</style>
