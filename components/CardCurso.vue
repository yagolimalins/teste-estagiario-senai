<template>
  <div class="card">
    <div class="card-imagem"></div>
    <div class="card-conteudo">
      <div class="card-dados">
        <div class="card-dados-titulo">
          <h1>{{ curso }}</h1>
        </div>
        <div class="card-dados-descricao">
          {{ descricao }}
        </div>
        <div class="card-dados-datavalor">
          <p>Início: <strong id="data">{{ inicio }}</strong></p>
          <p>Investimento: <strong id="valor">{{ valor }}</strong></p>
        </div>
      </div>
      <button class="card-botao">CONFIRA</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.card {
  display: flex;
  flex-direction: column;
  background-color: $cinza-claro;
  width: 373px;
  height: 433px;

  .card-imagem {
    background-image: url("~/assets/cursos/panetone.jpg");
    border-radius: 8px 8px 0 0;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 195px;
  }

  .card-conteudo {
    padding: 12px 32px 12px 32px;

    .card-dados {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 162px;

      .card-dados-titulo {
        color: $azul-titulo-curso;
        font-family: "Open Sans";
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
      }

      .card-dados-descricao {
        color: $preto-descrição-curso;
        font-family: "Open Sans";
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }

      p {
        color: $preto-dados-curso;
        font-family: "Open Sans";
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        #data {
          padding-left: 8px;
          font-weight: 700;
          line-height: 24px;
        }

        #valor {
          padding-left: 8px;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }

    .card-botao {
      color: $cinza-claro;
      background-color: $azul-titulo-curso;
      width: 100%;
      border-radius: 8px;
      padding: 8px;
      gap: 8px;
      font-family: "Open Sans";
      font-weight: 700;
      font-size: 14px;
    }
  }

}

</style>

<script>

export default {
  props: {
    curso: String,
    descricao: String,
    inicio: String,
    valor: String,
  }
}
</script>