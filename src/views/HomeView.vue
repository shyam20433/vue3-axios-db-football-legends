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
    <router-link to="/football-api" class="did">Axios API</router-link>
    <router-link to="/favorites" class="did"> ❤️ Favourite Players </router-link>
  </div>
</template>
<style>
.container {
  padding: 40px;
  border-radius: 24px;
  height: auto;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: var(--glass-bg, rgba(20, 26, 46, 0.65));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-premium, 0 10px 40px -10px rgba(0, 0, 0, 0.7));
  margin: 40px auto;
  gap: 8px;
}

#h1 {
  font-family: var(--font-primary), sans-serif;
  color: var(--text-primary, #f8fafc);
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.did {
  font-family: var(--font-primary), sans-serif;
  color: var(--text-primary, #f8fafc);
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  padding: 14px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: block;
}

.did:hover {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%);
  border-color: rgba(99, 102, 241, 0.4);
  color: var(--color-primary-hover, #818cf8);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
  transform: translateY(-2px);
}

.did:active {
  transform: translateY(0);
}

.did[to="/favorites"] {
  background: rgba(244, 63, 94, 0.05);
  border-color: rgba(244, 63, 94, 0.15);
  color: #fda4af;
}

.did[to="/favorites"]:hover {
  background: rgba(244, 63, 94, 0.15);
  border-color: rgba(244, 63, 94, 0.5);
  color: #f43f5e;
  box-shadow: 0 0 25px rgba(244, 63, 94, 0.25);
}
</style>
