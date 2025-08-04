import React, { useMemo } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    ListItem,
    ListItemText,
    Typography,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export function OverdueNotificationDialog({ open, onClose, horses }) {
    const overdueHorses = useMemo(() => {
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        return horses.filter(horse => new Date(horse.lastVetCheck) < sixMonthsAgo);
    }, [horses]);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Overdue Vet Checks
                <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {overdueHorses.length > 0 ? (
                    <List dense>
                        {overdueHorses.map(horse => (
                            <ListItem key={horse.id}>
                                <ListItemText
                                    primary={horse.name}
                                    secondary={`Last Check: ${new Date(horse.lastVetCheck).toLocaleDateString()}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography sx={{ p: 2, textAlign: 'center' }}>
                        No overdue vet checks. Great job!
                    </Typography>
                )}
            </DialogContent>
        </Dialog>
    );
}