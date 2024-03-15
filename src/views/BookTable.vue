<template>
    <div>
      <h1>Book a Restaurant</h1>
      <form @submit.prevent="submitBooking">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="bookingData.name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="bookingData.email" required>
        </div>
        <div>
          <label for="people">Number of People:</label>
          <input type="number" id="people" v-model="bookingData.people" required>
        </div>
        <div>
          <label for="booking_date">Booking Date:</label>
          <input type="datetime-local" id="booking_date" v-model="bookingData.booking_date" required>
        </div>
        <div>
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

  const submitBooking = () => {
    const createdDate = new Date(Date.now());
    bookingData.value.created_date = createdDate.toISOString().split('T')[0];
    bookingStore.createAPI();
    };
  </script>
  