<template>
  <Header/>
  <Banner/>
  <div class="body">
    <body>
    <div class="conteudo-principal width-conteudo">
      <Main/>
      <Aside class="aside"/>
    </div>
    </body>
  </div>
  <Footer/>

</template>

<style lang="scss" scoped>

.body {
  padding: 48px 15px 48px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.conteudo-principal {
  display: flex;
  gap: 32px;

  .aside {
    width: 390px;
  }


  @media (max-width: 1199px) {
    .aside {
      display: none;
    }
  }

}

</style>