<template>
  <div class="card">
    <div class="card-imagem"></div>
    <div class="card-info">
      <h1 class="card-info-titulo">{{ titulo }}</h1>
      <p class="card-info-desc">{{ descricao }}</p>
      <div class="card-info-botao">
        <p class="card-info-botao-texto">Ver mais</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.card {
  background-color: #F8F8F8;
  display: flex;
  flex-direction: row;
  padding: 20px 16px 20px 16px;
  border-radius: 10px;
  gap: 20px;

  .card-imagem {
    background-color: $azul-footer;
    width: 154px;
    height: 162px;
    border-radius: 10px;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .card-info-titulo {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
    }

    .card-info-desc {
      font-family: "Open Sans", sans-serif;
      font-weight: 300;
      font-size: 16px;
      line-height: 21px;
    }

    .card-info-botao {

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: $azul-botao;
      width: 113px;
      height: 30px;
      border-radius: 10px;

      .card-info-botao-texto {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: $branco;
      }
    }

  }
}

</style>

<script>
export default {
  props: {
    imagem: String,
    titulo: String,
    descricao: String,
  }
}
</script>