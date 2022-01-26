<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
      <img src="../assets/img/PicBlind.png" alt="splash screen picblind">
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"]
};
</script>

<style>
.loader {
  bottom: 0;
  color: white;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

img {
    width: 1425px;
    height: auto;
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
