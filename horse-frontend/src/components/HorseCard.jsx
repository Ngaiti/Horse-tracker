import { Box, Typography, Avatar, Chip, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { getStatusColor } from '../utils/helpers';

export function HorseCard({ horse, onSelectHorse }) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card elevation={2}>
                <CardActionArea onClick={() => onSelectHorse(horse)}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: getStatusColor(horse.status) + '.light' }}>{horse.avatar}</Avatar>
                        <Box flexGrow={1}>
                            <Typography variant="subtitle1" component="div" fontWeight="bold">{horse.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${horse.breed}`}</Typography>
                        </Box>
                        <Chip label={horse.status} color={getStatusColor(horse.status)} size="small" />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}