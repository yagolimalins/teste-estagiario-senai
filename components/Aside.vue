<template>
  <aside>
    <div>
      <h1>CONHEÇA</h1>
      <ul>
        <li><a href="#">Sobre a SENAI</a></li>
        <li><a href="#">Diretoria e Equipe Executiva</a></li>
        <li><a href="#">Vagas abertas</a></li>
        <li><a href="#">Todas as Unidades</a></li>
      </ul>
    </div>

    <div>
      <h1>TRANSPARÊNCIA</h1>
      <ul>
        <li><a href="#">Transparência SENAI</a></li>
        <li><a href="#">Prestação de Contas TCU</a></li>
        <li><a href="#">Política de Privacidade</a></li>
        <li><a href="#">Segurança da Informação</a></li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>

aside {
  display: flex;
  flex-direction: column;
  gap: 52px;

  div {

    display: flex;
    flex-direction: column;
    background-color: $cinza;
    height: 233px;
    border-radius: 8px;
    padding: 32px 24px 32px 24px;
    gap: 17px;

    h1 {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: $azul-escuro;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 17px;

      li {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: $azul-escuro;

        a:hover {
          font-weight: 700;
        }
      }
    }
  }
}

</style>
<script setup lang="ts">
</script>