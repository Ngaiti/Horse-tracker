// src/components/HorseDetails.js
import { Box, Typography, List, ListItem, ListItemText, Avatar, Card, CardContent, CardHeader, Divider } from '@mui/material';
import { getStatusColor } from '../utils/helpers';

export function HorseDetails({ horse }) {
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