// src/theme/theme.js
import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#f4f6f8',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h4: {
            fontWeight: 700,
        },
    },
    shape: {
        borderRadius: 8,
    },
});