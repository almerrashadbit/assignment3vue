<template>
  <MenuListView></MenuListView>
</template>

<script setup>
import MenuListView from '../components/MenuListView.vue';
</script>

<style scoped>
  li {
    padding: 10px;
    background-color: burlywood;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  span {
    margin-left: 50px;
  }

  .container {
    width: 100%;
    text-align: center; /* Centers the elements horizontally */
  }
</style>
