<template>
    <ul>
        <li v-for="item in menuStore.menus" :key="item.id">
            <img src="https://picsum.photos/100" alt="">
            <div class="menuShow">
                <h4>{{ item.name }}</h4>
                <h5>{{ item.price }}</h5>
                <h6>{{ item.detail }}</h6>
            </div>
        </li>
    </ul>
  </template>
  
  <script setup>
  import { useMenuStore } from '../stores/menu';
  import { onMounted } from 'vue'
  
  const menuStore = useMenuStore();
  
  menuStore.fetchUsers();
  </script>
  
  <style scoped>
    .menuShow {
        display: inline-block;
        margin-left: 20%;
    }

    li {
      padding: 10px;
      background-color: burlywood;
      margin-bottom: 2%;
      border-radius: 10px;
      width: 50%;
      margin-left: 25%;
      text-align: center;
    }
  
    span {
      margin-left: 50px;
    }
  
  </style>
  