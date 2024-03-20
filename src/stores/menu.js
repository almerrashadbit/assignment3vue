import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenuStore = defineStore('menu', () => {
  const menuData = {
    id: 1,
    name: "",
    price: "",
    detail: "",
    image: ""
  }
  
  const menuDataObject = ref(menuData)
  const menus = ref([])

  function fetchUsers() {
    fetch('http://localhost:3000/menu')
    .then(res => res.json())
    .then(data => {menus.value = data});

    console.log("Success");
  }

  async function addMenu() {
    try {
      menuDataObject.value.id = parseInt(menus.value[menus.value.length-1].id)+1;
      const sendResponse = await fetch('http://localhost:3000/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuDataObject.value)
      })

      menuDataObject.value.id = 1
      menuDataObject.value.detail = ""
      menuDataObject.value.image = ""
      menuDataObject.value.name = ""
      menuDataObject.value.price = ""


      return true
    } catch (error) {
      console.log(error);
      return false;
    }

  }

  async function editMenu() {
    try {
      const sendResponse = await fetch(`http://localhost:3000/menu/${menuDataObject.value.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuDataObject.value)
      })

      menuDataObject.value.id = 1
      menuDataObject.value.detail = ""
      menuDataObject.value.image = ""
      menuDataObject.value.name = ""
      menuDataObject.value.price = ""

      return true
    } catch (error) {
      console.log(error);
      return false;
    }

  }

  return {menus, fetchUsers, addMenu, editMenu, menuData}
});

