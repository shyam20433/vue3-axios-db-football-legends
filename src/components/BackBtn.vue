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
  border-radius: 5px;
  background-color: green;
  color: black;
  font-family: 'Times New Roman', Times, serif;
  font-size: larger;
  font-weight: bolder;
  font-style: italic;
  padding: 5px;
  cursor: pointer;
}

.backBtn:hover {
  background-color: aqua;
}

#position {
  margin-left: -10px;
}
</style>
