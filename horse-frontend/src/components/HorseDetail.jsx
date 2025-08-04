// src/components/HorseDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getHorseById } from '../services/horseApi';

const HorseDetail = () => {
  const { horseId } = useParams();
  const [horse, setHorse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHorse = async () => {
      try {
        const data = await getHorseById(horseId);
        setHorse(data);
      } catch (error) {
        console.error("Failed to fetch horse details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHorse();
  }, [horseId]);

  if (loading) {
    return <p>Loading horse details...</p>;
  }

  if (!horse) {
    return <p>Horse not found. <Link to="/">Go back to list</Link></p>;
  }

  return (
    <div className="horse-detail-container">
      <Link to="/" className="back-link">← Back to List</Link>
      <h2>{horse.name}</h2>
      <div className="horse-info">
        <p><strong>Breed:</strong> {horse.breed}</p>
        <p><strong>Age:</strong> {horse.age}</p>
        <p><strong>Status:</strong> <span className={`status status-${horse.status}`}>{horse.status}</span></p>
        <p><strong>Last Vet Check:</strong> {new Date(horse.lastVetCheck).toLocaleDateString()}</p>
      </div>

      <div className="training-logs">
        <h3>Training Logs</h3>
        {horse.trainingLogs.length > 0 ? (
          <ul>
            {horse.trainingLogs.map((log, index) => (
              <li key={index}>
                <strong>{new Date(log.date).toLocaleDateString()}:</strong> {log.activity} ({log.duration} mins) - <em>{log.notes}</em>
              </li>
            ))}
          </ul>
        ) : (
          <p>No training logs available.</p>
        )}
      </div>
    </div>
  );
};

export default HorseDetail;