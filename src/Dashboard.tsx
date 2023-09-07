import { Card, CardContent, CardHeader } from "@mui/material";
import { useRedirect } from "react-admin";

const PostsButton = () => {
  const redirect = useRedirect();
  const handleClick = () => {
    redirect("/posts");
  };
  return <button onClick={handleClick}>Posts</button>;
};

export const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    <PostsButton />
  </Card>
);
