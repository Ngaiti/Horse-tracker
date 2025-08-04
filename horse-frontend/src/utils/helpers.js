export const getStatusColor = (status) => {
    // Return a default if status is null or undefined
    if (!status) return 'default';

    // Convert the status to lowercase before checking
    switch (status.toLowerCase()) {
        case 'active':
            return 'success';
        case 'resting':
            return 'info';
        case 'injured':
            return 'error';
        default:
            return 'default';
    }
};