import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {defineNuxtPlugin} from "nuxt/app";
import 'vuetify/styles/main.sass'
import '@mdi/font/css/materialdesignicons.css'

const Theme = {
    dark: false,
    colors: {
        background: '#FBFCFE',
        primary: '#3a4e6c',
        secondary: '#ced2e2',
        error: '#000000',
        info: '#000000',
        success: '#000000',
        warning: '#000000',
        yellow: '#ddc700'
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'Theme',
            themes: {
                Theme,
            }
        },
    })

    nuxtApp.vueApp.use(vuetify);
});
