import es from "@blackbox-vision/ra-language-spanish";
import polyglotI18nProvider from "ra-i18n-polyglot";
import en from "ra-language-english";

const translations = { es, en };

export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  "es", // default locale
  [
    { locale: "en", name: "English" },
    { locale: "es", name: "Español" },
  ]
);
