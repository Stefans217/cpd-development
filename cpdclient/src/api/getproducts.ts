import axios from 'axios';

const API_URL = 'http://localhost:80/api'; // Adjust the URL as per your backend configuration

export const getBusiness = async () => {
  try {
    const response = await axios.post(`${API_URL}/getbusiness`);
    return response.data;
  } catch (error) {
    console.error('Error fetching business data:', error);
    throw error;
  }
};