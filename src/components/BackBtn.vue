//normal back button to learn component

<!-- <template>
  <div id="position">
  <router-link to="/" class="backBtn">
    Back
  </router-link>
  </div>
</template>

<style>
.backBtn{
  border-radius: 5px;
  background-color: green;
  color: black;
  font-family: 'Times New Roman', Times, serif;
  font-size: larger;
  font-weight: bolder;
  font-style: italic;
  margin-left: -10px;
  padding: 5pxpx;

}
.backBtn:hover{
  background-color: aqua;
}

#position{
  margin-left: -10px;
}

</style>
 -->


//emit concept to sent a message to parent for being clicked

<script setup>
const emit = defineEmits(['back'])

function handleClick() {
  //alert(`button has been clicked !!!`)
  emit('back')
}
</script>

<template>
  <div id="position">
    <button class="backBtn" @click="handleClick">
      Back
    </button>
  </div>
</template>

<style>
.backBtn {
  border-radius: 50px;
  background: linear-gradient(135deg, var(--color-primary, #6366f1) 0%, #4f46e5 100%);
  color: var(--text-primary, #ffffff);
  font-family: var(--font-primary), sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 8px 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.backBtn:hover {
  background: linear-gradient(135deg, var(--color-primary-hover, #818cf8) 0%, #6366f1 100%);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  transform: translateY(-2px);
}

.backBtn:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
}

#position {
  margin-left: 0;
  margin-bottom: 25px;
}
</style>
