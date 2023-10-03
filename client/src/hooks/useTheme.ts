import { blue, indigo, pink } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';

export const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: blue,
        secondary: indigo,
        error: pink,
    },
};

export const darkTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: blue,
        secondary: indigo,
        error: pink,
    },
};