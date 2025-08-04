// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline, CircularProgress, Typography} from '@mui/material';

import { theme } from './theme/theme';
import Header from './components/Header';
import { getHorses } from './services/horseApi';
import { CardView } from './components/CardView'; 
import { TableView } from './components/TableView';
import { OverdueNotification } from './components/OverdueNotification';

export default function App() {
    const [horses, setHorses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHorses = async () => {
            try {
                const data = await getHorses();
                setHorses(data);
            } catch (error) {
                console.error("Failed to fetch horses from backend:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchHorses();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Header />
                    <OverdueNotification horses={horses} />
                        <Box sx={{ my: 3 }}>
                            {/* <Typography variant="h4" component="h1" gutterBottom align="center">
                                Horse Tracker System
                            </Typography>
                            <Typography variant="subtitle1" align="center" color="text.secondary">
                                Monitoring the health and performance of our equine athletes.
                            </Typography> */}
                        </Box>
                    <Box component="main" sx={{ flexGrow: 1, p: 7, display: 'flex', justifyContent: 'center' }}>
                        {loading ? (
                            <CircularProgress sx={{mt: 5 }} />
                        ) : (
                            <Routes>
                                <Route path="/" element={<CardView horses={horses} />} />
                                <Route path="/table" element={<TableView horses={horses} />} />
                            </Routes>
                        )}
                    </Box>
                </Box>
            </Router>
        </ThemeProvider>
    );
}