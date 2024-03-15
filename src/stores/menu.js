import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenuStore = defineStore('menu', () => {
  const menus = ref([])

  function fetchUsers() {
    fetch('http://localhost:3000/menu')
    .then(res => res.json())
    .then(data => {menus.value = data});

    console.log("Success");
  }

  return {menus, fetchUsers}
});

