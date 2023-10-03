import { AppBar, TitlePortal, ToggleThemeButton, defaultTheme } from "react-admin";

const darkTheme = {
    palette: { mode: 'dark' },
};

export const MyAppBar = () => (
    <AppBar>
        toolbar={<ToggleThemeButton />}
    </AppBar>
    );

export default MyAppBar;