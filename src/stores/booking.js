import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookingStore = defineStore('booking', () => {
    const bookingData = {
      name: '',
      email: '',
      people: 1,
      booking_date: '',
      special_request: '',
      created_date: '',
      id: ''
    }
  
    const bookings = ref([])
    const bookingDataObject = ref(bookingData)
  
    function createAPI() {
      fetch('http://localhost:3000/bookings')
      .then(res => res.json())
      .then(data => {bookings.value = data});

      console.log("Berhasil");
      console.log(bookingDataObject.value);
      console.log(parseInt(bookings.value[bookings.value.length-1].id)+1);
    
      bookingDataObject.value.id = parseInt(bookings.value[bookings.value.length-1].id)+1;

  
      fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingDataObject.value)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create data');
        }
        return response.json();
      })
      .then(data => {console.log("Success");});
    }

    return {bookingData, createAPI}
  });
  