import { blue, indigo, pink } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';
import { TypeBackground } from '@mui/material/styles/createPalette';


export const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: blue,
        secondary: indigo,
        error: pink,
        background: {
            default: '#fff',
            paper: '#fff',
        } as TypeBackground,
    },
};

export const darkTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: blue,
        secondary: indigo,
        error: pink,
        background: {
            default: '#303030',
            paper: '#424242',
        } as TypeBackground,
    },
};