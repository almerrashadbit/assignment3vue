<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="center">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/menulist">Menu</RouterLink>
        <RouterLink to="/book-table">Book</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
  html {
    background-color:blanchedalmond;
  }

  header {
    background-color: chocolate;
    padding: 20px;
    border-radius: 10px;
  }

  template {
    background-color: violet;
  }

  nav {
    margin: auto;
    width: 50%;
    text-align: center;
  }
  nav a {
    color:bisque;
    margin-right: 15px;
    margin-left: 15px;
    font-size: x-large;
    font-family: Cambria
  }
</style>
