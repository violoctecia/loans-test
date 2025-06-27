// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    css: ['~/assets/styles/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_vars.scss" as *;',
                },
            },
        },
    },
    ssr: true,
    app: {
        rootId: "v",
        buildAssetsDir: "/v/",
        head: {
            htmlAttrs: {lang: 'en'},
            // link: [{rel: "icon", type: "image/png", href: "/favicon.png"}],
            meta: [{charset: 'utf-8'}]
        },
    },

    hooks: {
        "build:manifest": (manifest) => {
            for (const key in manifest) {
                const file = manifest[key];
                file.preload = false;
                file.prefetch = false;
            }
        },
    },
    // experimental: {
    //     defaults: {
    //         nuxtLink: {
    //             trailingSlash: "append",
    //             prefetchOn: {visibility: false, interaction: true}
    //         },
    //     }
    // },

    // devServer: {
    //     port: 3001
    // }
});
