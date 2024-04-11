<template>
  <nav class="navbar width-conteudo">

    <div class="nav-logo">
      <img src="~/assets/logo-senai-blue.png" alt="logo">
    </div>

    <div class="nav-menu">
      <ul class="nav-menu-list">
        <li class="nav-menu-list-item">
          <a href="#">Institucional</a>
        </li>
        <li class="nav-menu-list-item">
          <a href="#">Para Empresas</a>
        </li>
        <li class="nav-menu-list-item">
          <a href="#">Fale Conosco</a>
        </li>
        <li class="nav-menu-list-item">
          <a href="#">Transparência</a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<style lang="scss" scoped>

.navbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .nav-menu-list {
    display: flex;
    flex-direction: row;
    gap: 20px;

    .nav-menu-list-item {
      font-family: "Open Sans", sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #0D2536;
      line-height: 19px;
    }
  }
}

@media (max-width: 749px) {
  .nav-menu{
    display: none;
  }
}

</style>