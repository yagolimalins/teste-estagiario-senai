<template>
  <nav class="navbar width-conteudo">

    <div class="nav-top">
      <div class="nav-logo">
        <img src="~/assets/logo-senai-blue.png" alt="logo">
      </div>

      <div class="hamburger" @click="isActive = !isActive">
        <img src="~/assets/hamburger-menu.png">
      </div>
    </div>

    <div class="nav-menu" :class="{ active: isActive }">
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

<script>

export default {
  data() {
  return {
    isActive: false
  }
}
}

</script>

<style lang="scss" scoped>
.hamburger {
  display: none;
}

.navbar {
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  padding: 32px 0px 32px 0px;
  justify-content: space-between;
  align-items: center;

  .nav-top {
    display: flex;
    align-self: flex-start;

    .hamburger {
      display: none;
    }
  }

  .nav-menu-list {
    display: flex;
    flex-direction: row;
    gap: 18px;

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

  .navbar {
    flex-direction: column;

    .nav-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .hamburger {
        display: flex;
        width: 32px;
        height: 18px;
      }
    }
  }

  .nav-menu {
    display: none;
    .nav-menu-list {
      align-items: center;
      flex-direction: column;
    }
  }

  .active {
    display: flex;
  }

}
</style>