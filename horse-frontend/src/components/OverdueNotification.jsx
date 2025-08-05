import React, { useMemo } from 'react';
import { Alert, AlertTitle, Box, List, ListItem, ListItemText } from '@mui/material';

export function OverdueNotification({ horses }) {
    // useMemo will only recalculate the list when the 'horses' prop changes.
    const overdueHorses = useMemo(() => {
        const sixMonthsAgo = new Date();
        // Set the date to 6 months before today.
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        // Filter the list to find horses with vet checks older than 6 months.
        return horses.filter(horse => {
            const checkDate = new Date(horse.lastVetCheck);
            return checkDate < sixMonthsAgo;
        });
    }, [horses]);

    // If there are no overdue horses, render nothing.
    if (overdueHorses.length === 0) {
        return null;
    }

    return (
        <Box sx={{ mb: 4 }}>
            <Alert severity="warning">
                <AlertTitle>Overdue Vet Checks</AlertTitle>
                The following horses have not had a vet check in over 6 months:
                <List dense sx={{ pt: 1 }}>
                    {overdueHorses.map(horse => (
                        <ListItem key={horse.id} sx={{ py: 0 }}>
                            <ListItemText 
                                primary={`- ${horse.name}`} 
                                secondary={`Last Check: ${new Date(horse.lastVetCheck).toLocaleDateString()}`} 
                            />
                        </ListItem>
                    ))}
                </List>
            </Alert>
        </Box>
    );
}