function FilterControl({ statusFilter, onFilterChange }) {
    return (
        <Box sx={{ mb: 4, maxWidth: 'sm', mx: 'auto' }}>
            <FormControl fullWidth variant="outlined">
                <InputLabel>Filter by Status</InputLabel>
                <Select
                    value={statusFilter}
                    onChange={onFilterChange}
                    label="Filter by Status"
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="resting">Resting</MenuItem>
                    <MenuItem value="injured">Injured</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}