import React, { useState, useEffect, useMemo } from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    IconButton, 
    ThemeProvider, 
    CssBaseline,
    CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { theme } from './theme/theme';
import { getHorses } from './services/horseApi';
import { HorseList } from './components/HorseList';
import { HorseDetails } from './components/HorseDetails';
// 1. Import the new notification component
import { OverdueNotification } from './components/OverdueNotification';

export default function App() {
    const [horses, setHorses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedHorse, setSelectedHorse] = useState(null);
    const [statusFilter, setStatusFilter] = useState('all');

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
            <Box sx={{
                margin: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                minHeight: '100vh',
            }}>
                <Container maxWidth="lg" sx={{ bgcolor: '#ffffff', p: 4, borderRadius: 2 }}>
                    <Box sx={{ my: 3 }}>
                        <Typography variant="h4" component="h1" gutterBottom align="center">
                            Horse Tracker System
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="text.secondary">
                            Monitoring the health and performance of our equine athletes.
                        </Typography>
                    </Box>

                    {/* 2. Render the notification component here */}
                    {/* It will only appear if there are overdue checks */}
                    <OverdueNotification horses={horses} />

                    <Box sx={{ mb: 4, maxWidth: 'sm', mx: 'auto' }}>
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

                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <HorseList
                            horses={filteredHorses}
                            onSelectHorse={handleSelectHorse}
                        />
                    )}

                    <Dialog open={!!selectedHorse} onClose={handleCloseModal} maxWidth="sm" fullWidth>
                        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            Horse Details
                            <IconButton
                                aria-label="close"
                                onClick={handleCloseModal}
                                sx={{ color: (theme) => theme.palette.grey[500] }}
                            >
                                <CloseIcon />
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