import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

export const  i18n = new VueI18n({
    locale:'en',
    fallbackLocale: 'ru',
    messages: {
        en: {
            im: 'I\'m Ruslan Chudin'
        },
        ru: {
            im: 'Я Руслан Чудин'
        }
    }
});

