import { Card, CardContent, CardHeader } from "@mui/material";
import { useLogout } from "react-admin";

const LogoutButton = () => {
  const logout = useLogout();

  const handleLogoutClick = () => {
    logout();
  };

  return <button onClick={handleLogoutClick}>Cerrar Sesión</button>;
};

export const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    <LogoutButton />
  </Card>
);
