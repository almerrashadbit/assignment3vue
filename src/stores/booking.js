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
  
    async function createAPI() {
      try {
        const response = await fetch('http://localhost:3000/bookings')

        bookings.value = await response.json();
      
        bookingDataObject.value.id = parseInt(bookings.value[bookings.value.length-1].id)+1;
  
    
        const sendResponse = await fetch('http://localhost:3000/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingDataObject.value)
        })

        bookingDataObject.value.booking_date = ''
        bookingDataObject.value.name = ''
        bookingDataObject.value.people = 1
        bookingDataObject.value.special_request = ''
        bookingDataObject.value.email = ''

        return true
        
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    return {bookingData, createAPI}
  });
  