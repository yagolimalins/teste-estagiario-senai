<template>
  <Header/>
  <Banner/>
  <div class="body">
    <body>
    <div class="conteudo-principal width-conteudo">
      <Main/>
      <Aside class="aside" v-if="$viewport.isGreaterThan('tablet')"/>
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


}

</style>

<script setup>
import {useNuxtApp} from '#app'
import Banner from "~/components/Banner.vue";

const {$viewport} = useNuxtApp()

watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
})
</script>