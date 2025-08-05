import React, { useMemo } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Avatar, Card, CardContent, CardHeader, Divider } from '@mui/material';
import { getStatusColor } from '../utils/helpers';
import { TrainingChart } from './TrainingChart'; 

export function HorseDetails({ horse }) {
    const chartData = useMemo(() => {
        if (!horse.trainingLogs || horse.trainingLogs.length === 0) {
            return [];
        }
        
        // Transform and sort the data for the chart
        return horse.trainingLogs
            .map(log => ({
                // Format date for better readability on the chart's axis
                date: new Date(log.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                // Parse the duration string (e.g., "45 mins") into a number
                duration: parseInt(log.duration, 10) || 0, 
            }))
            .reverse();

    }, [horse.trainingLogs]);

    return (
        <Card sx={{ boxShadow: 'none' }}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: getStatusColor(horse.status) + '.main' }}>{horse.avatar}</Avatar>}
                title={horse.name}
                subheader={`${horse.breed}, ${horse.age} years old`}
            />
            <Divider />
            <CardContent>
                <Box mb={3}>
                    <Typography variant="h6" gutterBottom>Health Stats</Typography>
                    <Typography variant="body2"><strong>Last Vet Check:</strong> {horse.lastVetCheck}</Typography>
                    <Typography variant="body2"><strong>Heart Rate:</strong> {horse.healthStats.heartRate} bpm</Typography>
                    <Typography variant="body2"><strong>Temperature:</strong> {horse.healthStats.temperature}°C</Typography>
                    <Typography variant="body2"><strong>Recovery Rate:</strong> {horse.healthStats.recoveryRate}</Typography>
                </Box>
                <Divider />

                {/* 3. Add the Chart Section */}
                <Box my={3}>
                    <Typography variant="h6" gutterBottom>Training Duration Progress</Typography>
                    <TrainingChart data={chartData} />
                </Box>
                
                <Divider />

                <Box mt={3}>
                    <Typography variant="h6" gutterBottom>Recent Training Logs</Typography>
                    <List dense>
                        {horse.trainingLogs.map((log, index) => (
                            <ListItem key={index} disableGutters>
                                <ListItemText
                                    primary={`${log.date}: ${log.activity} (${log.duration})`}
                                    secondary={log.notes}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </CardContent>
        </Card>
    );
}