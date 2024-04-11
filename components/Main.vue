<template>
  <main class="main width-conteudo padding-global">
    <div class="conteudo">
      <h1>Unidades</h1>
      <p>Fazendo parte de um sistema nacional, composto por 27 federações estaduais
        e guiado pela Confederação Nacional da Indústria (CNI),
        o Serviço Nacional de Aprendizagem Industrial de Alagoas (SENAI/AL) é uma
        instituição de destaque, reconhecida por sua atuação de excelência na formação e capacitação profissional.
        <br> <br>
        Nossa missão é contribuir para o crescimento econômico de Alagoas, promovendo a qualificação da mão de obra,
        a disseminação de conhecimento tecnológico e o fortalecimento do setor industrial. Estamos comprometidos em
        impulsionar a indústria local e, assim, contribuir para o desenvolvimento do estado.

      </p>
    </div>

    <div class="cards-unidades">
      <CardUnidade
          titulo="Senai Arapiraca"
          descricao="As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta."
      />
      <CardUnidade
          titulo="Senai Benedito Bentes"
          descricao="As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta."
      />
      <CardUnidade
          titulo="Senai Poço"
          descricao="As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta."
      />
    </div>

    <div class="cards-cursos">
      <CardCurso
          class="card-curso"
          curso="FABRICAÇÃO DE PANETONES E CHOCOTONES"
          descricao="O Curso de Iniciação Profissional em Fabricação de Panetones e Chocotones do
          SENAI Alagoas busca preparar os alunos para a fabricação..."
          inicio="18/10/2021"
          valor="6x de R$ 66,50"
      />
      <CardCurso class="card-curso"
                 imagem="~/assets/cursos/panetone.jpg"
                 curso="FABRICAÇÃO DE PANETONES E CHOCOTONES"
                 descricao="O Curso de Iniciação Profissional em Fabricação de Panetones e Chocotones do
          SENAI Alagoas busca preparar os alunos para a fabricação..."
                 inicio="18/10/2021"
                 valor="6x de R$ 66,50"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>

.main {
  display: flex;
  flex-direction: column;
  max-width: 778px;
  gap: 44px;

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #000000;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin-top: 24px;
    line-height: 22px;
  }

  .cards-unidades {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .cards-cursos {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  @media (max-width: 749px) {
    .cards-cursos {
      flex-direction: column;
      align-items: center;
    }
    .card-curso {
      width: 100%;
    }
  }
}

</style>