import polyglotI18nProvider from "ra-i18n-polyglot";
import en from "ra-language-english";
import es from "ra-language-spanish";
import spanishMessages from "./spanishMessages";

const translations = { es, en };

// export const i18nProvider = polyglotI18nProvider(
//   (locale) => translations[locale],
//   "en", // default locale
//   [
//     { locale: "en", name: "English" },
//     { locale: "es", name: "Español" },
//   ]
// );

export const i18nProvider = polyglotI18nProvider(
  (locale) => spanishMessages,
  "es"
);
