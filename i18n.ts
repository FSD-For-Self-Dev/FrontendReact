import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

export default i18n
	.use(Backend)
	.use(initReactI18next)
	.init({ debug: true, lng: 'ru', interpolation: { escapeValue: false } });
