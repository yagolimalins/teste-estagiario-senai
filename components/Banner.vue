<template>
  <div class="banner">
    <div class="overlay">
      <div class="titulo-banner padding-global">
        <h1>Sobre o SENAI</h1>
        <h2>Pelo Futuro do Ensino</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.titulo-banner {
  display: flex;
  align-items: center;
  padding-top: 120px;
  flex-direction: column;

}

h1 {
  max-width: 1200px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: $branco;
}
h2 {
  max-width: 1200px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: $branco;
}

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
<script setup lang="ts">
</script>