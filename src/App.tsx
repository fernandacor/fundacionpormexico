import {
  Admin,
  ListGuesser,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="test" list={ListGuesser}></Resource>
</Admin>;
