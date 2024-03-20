<template>
  <div class="container">
    <button class="spanning" @click="toggleAddForm">Add Menu</button>
    <button class="spanning" @click="toggleEditForm">Edit Menu</button>
  </div>
  <form class="container" v-if="showAddForm" @submit.prevent="submitAddForm">
      <div class="formInput">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="menuData.name">
      </div>
      <div class="formInput">
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="menuData.price">
      </div>
      <div class="formInput">
        <label for="detail">Detail:</label>
        <textarea id="detail" v-model="menuData.detail"></textarea>
      </div>
      <div class="formInput">
        <label for="imagePath">Image Path:</label>
        <input type="text" id="imagePath" v-model="menuData.image">
      </div>
      <button type="submit">Add</button>
  </form>
  <form class="container" v-if="showEditForm" @submit.prevent="submitEditForm">
    <div class="formInput">
        <label for="id">ID:</label>
        <input type="text" id="id" v-model="menuData.id">
      </div>
      <div class="formInput">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="menuData.name">
      </div>
      <div class="formInput">
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="menuData.price">
      </div>
      <div class="formInput">
        <label for="detail">Detail:</label>
        <textarea id="detail" v-model="menuData.detail"></textarea>
      </div>
      <div class="formInput">
        <label for="imagePath">Image Path:</label>
        <input type="text" id="imagePath" v-model="menuData.image">
      </div>
      <button type="submit">Edit</button>
  </form>
  <MenuListView></MenuListView>
</template>

<script setup>
import { ref } from 'vue';
import MenuListView from '../components/MenuListView.vue';
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();

const showAddForm = ref(false)
const showEditForm = ref(false)

const menuData = ref(menuStore.menuData)


const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value;
  showEditForm.value = false;
    };

    const toggleEditForm = () => {
  showAddForm.value = false;
  showEditForm.value = !showEditForm.value;
    };

    const submitAddForm = async () => {
      try {

        if(await menuStore.addMenu()){
          alert("Add data success");
        window.location.reload();
        } else {
          alert("Add data not success");
        }

      } catch (error) {
        console.log(error);
        alert("Add data not success");
      }
    };

    const submitEditForm = async () => {
      try {
        if(await menuStore.editMenu()){
          alert("Edit data success");
        window.location.reload();
        }else{
          alert("Edit data not success");
        }
      } catch (error) {
        alert("Edit data not success");
      }

    };

</script>

<style scoped>
  .formInput{
    margin-top: 2%;
    margin-bottom: 2%;
  }


  li {
    padding: 10px;
    background-color: burlywood;
    margin-bottom: 10px;
    border-radius: 10px;
  }


  .spanning {
    margin-left: 50px;
  }

  .container {
    width: 50%;
    margin-left: 25%;
    margin-top: 2%;
    text-align: center; /* Centers the elements horizontally */
  }
</style>
