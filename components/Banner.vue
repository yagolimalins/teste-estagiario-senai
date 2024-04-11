<template>
  <div class="banner">
    <div class="overlay">

    </div>
  </div>
</template>

<style lang="scss" scoped>

.banner {
  height: 250px;
  flex-direction: row;
  background-image: url('~/assets/banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.overlay{
  width: 100%;
  height: 100%;
  background-color: rgba(1, 72, 154, 0.8);
}

</style>