import React, { useState, useMemo } from 'react';
import { Box, Container, Typography, FormControl, InputLabel, Select, MenuItem, Dialog, DialogTitle, DialogContent, IconButton, ThemeProvider, CssBaseline } from '@mui/material';

import { theme } from './theme/theme';
import { mockHorses } from './data/mockData';
import { HorseList } from './components/HorseList';
import { HorseDetails } from './components/HorseDetails';

export default function App() {
    const [horses] = useState(mockHorses);
    const [selectedHorse, setSelectedHorse] = useState(null);
    const [statusFilter, setStatusFilter] = useState('all');

    const handleFilterChange = (event) => {
        setStatusFilter(event.target.value);
    };

    const handleSelectHorse = (horse) => {
        setSelectedHorse(horse);
    };

    const handleCloseModal = () => {
        setSelectedHorse(null);
    };

    const filteredHorses = useMemo(() => {
        if (statusFilter === 'all') {
            return horses;
        }
        return horses.filter((horse) => horse.status === statusFilter);
    }, [horses, statusFilter]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box   sx={{
        margin: "70px",
        display: 'grid',
        placeItems: 'center', // justify-content + align-items shorthand
        minWidth: "170vh"
      }}>
            <Container maxWidth="m" sx={{ bgcolor: '#ffffffff', p: 4, borderRadius: 2 }} >
                <Box sx={{ my: 3 }}>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Horse Tracker System
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="text.secondary">
                        Monitoring the health and performance of our equine athletes.
                    </Typography>
                </Box>

                <Box sx={{ mb: 3, maxWidth: 'sm', mx: 'auto' }}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Filter by Status</InputLabel>
                        <Select
                            value={statusFilter}
                            onChange={handleFilterChange}
                            label="Filter by Status"
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="resting">Resting</MenuItem>
                            <MenuItem value="injured">Injured</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <HorseList
                    horses={filteredHorses}
                    onSelectHorse={handleSelectHorse}
                />

                <Dialog open={!!selectedHorse} onClose={handleCloseModal} maxWidth="sm" fullWidth>
                    <DialogTitle sx={{ m: 0, p: 2 }}>
                        Horse Details
                        <IconButton
                            aria-label="close"
                            onClick={handleCloseModal}
                            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
                        >
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        {selectedHorse && <HorseDetails horse={selectedHorse} />}
                    </DialogContent>
                </Dialog>
            </Container>
            </Box>
        </ThemeProvider>
    );
}