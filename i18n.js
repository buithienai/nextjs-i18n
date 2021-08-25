import path from 'path';
const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
    preload: ['en'],
    defaultLanguage: 'en',
    otherLanguages: ['vi'],
    localePath: path.resolve('./static/locales'),
    keySeparator: false,
    fallbackLng: ['common', 'en'],
    localeSubpaths: true,
    wait: false,
    react: {
        useSuspense: false
    },
    detection: {
        order: ["cookie", "localStorage"],
        lookupCookie: "next-i18next",
        lookupLocalStorage: "i18nextLng",
        caches: ["cookie", "localStorage"]
    }
});