import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer XAWL1PAqmadSKGtt9OmvqAiul_Jt6OJexZ5bD73Uzg3E1QO5MXiPweFwDskPGsd7N0xQsad5IaoXLC8aoPpMIgTjC2KglXCg3cF3ZREVWOHWdIOxWku3nTdstVYYYHYx'
  }
});


