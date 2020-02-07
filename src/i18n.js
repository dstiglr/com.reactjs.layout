import i18n from 'i18next';
import EnglishTranslation from './locales/en.json';
import SpanishTranslation from './locales/es.json';

i18n.init({
    debug:false,
    lang:'es',
    fallbackLng: 'es',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
          translations: EnglishTranslation
        },
        es: {
          translations: SpanishTranslation
        }
      },
      // have a common namespace used around the full app
      ns: ["translations"],
      defaultNS: "translations"
});

export default i18n;