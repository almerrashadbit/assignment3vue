<template>
    <div class="containerForm">
      <h1>Book a Restaurant</h1>
      <form @submit.prevent="submitBooking">
        <div class="listForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="bookingData.name" required>
        </div>
        <div class="listForm">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="bookingData.email" required>
        </div>
        <div class="listForm">
          <label for="people">Number of People:</label>
          <input type="number" id="people" v-model="bookingData.people" required>
        </div>
        <div class="listForm">
          <label for="booking_date">Booking Date:</label>
          <input type="datetime-local" id="booking_date" v-model="bookingData.booking_date" required>
        </div>
        <div class="listForm">
          <label for="special_request">Special Requests:</label>
          <textarea id="special_request" v-model="bookingData.special_request"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
    import { useBookingStore } from '../stores/booking';
    import { ref } from 'vue';

    const bookingStore = useBookingStore();
    const bookingData = ref(bookingStore.bookingData);

    const submitBooking = async () => {
      try {
        const createdDate = new Date(Date.now());
      bookingData.value.created_date = createdDate.toISOString().split('T')[0];
      if(await bookingStore.createAPI()){
        alert("Booking Success");
        window.location.reload();
      } else {
        alert("Booking not success")
      }
      } catch (error) {
        alert("Booking not success")
      }

    };
  </script>

  <style scoped>
    .containerForm {
      margin: auto;
      width: 30%;
      text-align: center;
      padding: 2%;
      background-color: coral;
      margin-top: 5%;
      border-radius: 10px;
    }

    label {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      margin-right: 5%;
    }
    
    .listForm {
      margin-bottom: 5%;
    }

    h1 {
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    

 
  </style>