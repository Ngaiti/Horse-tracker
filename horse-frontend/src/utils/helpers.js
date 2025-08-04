export const getStatusColor = (status) => {
    switch (status) {
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