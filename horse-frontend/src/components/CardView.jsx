// src/components/CardView.jsx
import React, { useState, useMemo } from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { HorseList } from './HorseList';
import { HorseDetails } from './HorseDetails';

// This component receives the full list of horses as a prop
export function CardView({ horses }) {
    // All state related to the card view now lives here
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

    // The filtering logic is now case-insensitive
    const filteredHorses = useMemo(() => {
        if (statusFilter === 'all') {
            return horses;
        }
        // THE FIX IS HERE:
        return horses.filter((horse) => horse.status.toLowerCase() === statusFilter);
    }, [horses, statusFilter]);

    return (
        // A Box to wrap the content of this view
        <Box sx={{ width: '100%' }}>
            {/* Filter Dropdown */}
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

            {/* Horse Card Grid */}
            <HorseList
                horses={filteredHorses}
                onSelectHorse={handleSelectHorse}
            />

            {/* Details Modal (Dialog) */}
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
        </Box>
    );
}