// horse-tracker-frontend/src/services/horseApi.js

const API_BASE_URL = 'http://localhost:8000/api';

export const getHorses = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/horses`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch horses:", error);
    // Return an empty array or handle the error as needed
    return []; 
  }
};

export const getHorseById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/horses/${id}`);
    if (!response.ok) {
      throw new Error('Horse not found');
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch horse with id ${id}:`, error);
    throw error; // Re-throw the error to be caught by the component
  }
};