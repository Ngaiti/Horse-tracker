// src/services/horseApi.js
import { horses } from '../data/mockData';

// Simulate a network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getHorses = async () => {
  await delay(300); // Simulate API call latency
  return horses;
};

export const getHorseById = async (id) => {
  await delay(300);
  const horse = horses.find(h => h.id === id);
  if (!horse) {
    throw new Error('Horse not found');
  }
  return horse;
};