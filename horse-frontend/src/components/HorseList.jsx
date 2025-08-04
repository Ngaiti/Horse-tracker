import { Grid } from '@mui/material';
import { HorseCard } from './HorseCard';

export function HorseList({ horses, onSelectHorse }) {
    return (
        <Grid container spacing={2} justifyContent={"center"}>
            {horses.map((horse) => (
                <HorseCard
                    key={horse.id}
                    horse={horse}
                    onSelectHorse={onSelectHorse}
                />
            ))}
        </Grid>
    );
}