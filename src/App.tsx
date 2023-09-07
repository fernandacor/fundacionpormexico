import { Admin, ListGuesser, Resource, } from "react-admin";
import MyLoginPage from "./MyLoginPage";
import { dataProvider } from "./providers/dataProvider";
import { i18nProvider } from "./providers/i18nProvider";


export const App = () => <Admin loginPage={MyLoginPage} dataProvider={dataProvider} i18nProvider={i18nProvider}>
  <Resource name="test" list={ListGuesser}></Resource>
</Admin>;
