import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    GlobalStyles
} from '@mui/material';

export function TableView({ horses }) {
    return (
        <Box sx={{ width: '100%' }}>
             <GlobalStyles
                styles={{
                    '*::-webkit-scrollbar': {
                        display: 'none',
                    },
                    '*': {
                        msOverflowStyle: 'none', // IE and Edge
                        scrollbarWidth: 'none', // Firefox
                    },
                }}
            />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Breed</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Last Vet Check</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {horses.map((horse) => (
                            <TableRow
                                key={horse.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {horse.name}
                                </TableCell>
                                <TableCell>{horse.breed}</TableCell>
                                <TableCell>{horse.age}</TableCell>
                                <TableCell>{horse.status}</TableCell>
                                <TableCell>{new Date(horse.lastVetCheck).toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}