import { Admin, ListGuesser, Resource, } from "react-admin";
import { dataProvider } from "./dataProvider";
import { i18nProvider } from "./i18nProvider";

export const App = () => <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
  <Resource name="test" list={ListGuesser}></Resource>
</Admin>;
