<script setup>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router'
// import PageHome from "@/components/PageHome.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="container">
<!--      <page-home />-->
      <RouterView />
    </div>
  </header>

</template>

<style>
@import "assets/style.css";

</style>
