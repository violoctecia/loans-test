<script setup lang="ts">
const loans = [
    {
        name: 'Alvos',
        desc: 'The best and instant personal loans in Mexico.',
        loanAmount: '200 - 8,000 MXN',
        loanTerm: '7, 14, 21 and 28 days',
        logo: '/images/logo-white.ef800ef6.svg',
        link: 'https://trnsfx.ru/go/soaqphbkgq',
    },
    {
        name: 'Vivus',
        desc: 'Fast and reliable online personal loans in Mexico, from $300 to $12,000 MXN, with quick approval and flexible terms.',
        loanAmount: '$300 - $12,000 MXN',
        loanTerm: '7 - 30 days',
        logo: '/images/vivus_logo.svg',
        link: 'https://trnsfx.ru/go/stigy59ic0',
    },
    {
        name: 'Finzmo',
        desc: 'Finzmo is a personal loan broker for those who need the best solution at any time. Access any type of financing in a matter of minutes. It offers the best user experience through an easy and fast loan application process.',
        loanAmount: '$1,000 - $12,000 MXN',
        loanTerm: '3 - 48 months',
        logo: '/images/logo-finzmo-dark.svg',
        link: 'https://trnsfx.ru/go/s1svsyw2o1',
    },
    {
        name: 'Credito365',
        desc: 'Credito365 is a personal loan provider for those who need the best solution at any time. Access any type of financing in a matter of minutes. It offers the best user experience through an easy and fast loan application process.',
        loanAmount: 'MX$100 to MX$20,000',
        loanTerm: 'From 5 days to unlimited (prolongation option)',
        logo: '/images/credito365.svg',
        link: 'https://trnsfx.ru/go/s96rq38xqv',
    },
    {
        name: 'Finpug',
        desc: 'Free loan aggregation service designed to enable customers around the world to get a loan with a 0% interest rate. Free registration in 20 seconds without verification and without commissions or hidden fees.',
        loanAmount: '$5,000 to $200,000',
        loanTerm: '61 - 365 days',
        logo: '/images/logo-finpug.svg',
        link: 'https://trnsfx.ru/go/shz2z2p4gq',
    },
    {
        name: 'Zaimoo',
        desc: 'Zaimoo is a free loan service from 0% interest rate in Mexico with one-step short registration in 10 seconds.',
        loanAmount: '$4,000 - $40,000',
        loanTerm: '14 days for new clients, long-term options available',
        logo: '/images/zaimoo_blue.png',
        link: 'https://trnsfx.ru/go/sb1wtzisgq',
    },
    {
        name: 'Crezu',
        desc: 'Crezu is a reliable offer with high conversion rate and stable EPC.',
        loanAmount: '$1,000 to $150,000',
        loanTerm: '61 to 90 days',
        logo: '/images/crezu.svg',
        link: 'https://trnsfx.ru/go/sr5kjsqmue',
    },
];

useHead({
    title: 'Préstamos de prepago en línea en 5 minutos',
    meta: [
        {
            name: 'description',
            content: 'Seleccione 3 entidades de crédito y cumplimente el formulario de solicitud de dinero garantizado'
        },
        {
            name: 'robots',
            content: 'index, follow'
        }
    ]
})

</script>

<template>
   <SiteHeader/>
    <section class="hero">
        <div class="container">
            <div class="text">
                <h1>Préstamos de prepago en línea en 5 minutos</h1>
                <p>Seleccione 3 entidades de crédito y cumplimente el formulario de solicitud de dinero garantizado</p>
            </div>
            <div class="img">
                <img src="/images/girl_money.png" alt="">
            </div>
        </div>
        <img class="wave" src="/images/wave.svg" alt="">
    </section>
    <section class="offers">
        <div class="container">
            <div class="offer" v-for="i in loans">
                <div class="main">
                    <nuxt-link :to="i.link" target="_blank" class="logo">
                        <img :src="i.logo" loading="lazy" :alt="i.name">
                    </nuxt-link>
                    <p class="desc">{{ i.desc }}</p>
                </div>
                <dl>
                    <div>
                        <dt>Monto del préstamo</dt>
                        <dd>{{ i.loanAmount }}</dd>
                    </div>
                    <div>
                        <dt>Plazo del préstamo</dt>
                        <dd>{{ i.loanTerm }}</dd>
                    </div>
                </dl>
                <nuxt-link class="link" :to="i.link" target="_blank">Zdobądź pieniądze</nuxt-link>
            </div>
        </div>
    </section>
    <footer>
        <div class="container">
            <nuxt-link to="/consentimiento-datos/">Consentimiento para el tratamiento de datos personales</nuxt-link>
            <nuxt-link to="/politica-datos/">Política de tratamiento de datos personales</nuxt-link>
            <p>El sitio NO es representante de una IMF ni de un banco y no concede préstamos ni créditos. Todas las
                entidades de crédito recomendadas en el sitio están autorizadas. Las condiciones de impago pueden
                explicarse en el sitio web de la IMF.</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    padding: 50px 0;
    background: white;

    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;

        a {
            font-weight: 500;
            color: rgba(80, 80, 80, 1);
            text-align: center;
            font-size: 18px;
        }

        p {
            text-align: center;
            color: rgb(80, 80, 80);
            font-size: 14px;
            font-weight: 400;
        }
    }
}

.offers {
    background-image: linear-gradient(rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 1) 100%);
    padding: 40px 0;

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;

        .offer {
            flex: 1 1 313px;
            padding: 20px;
            box-shadow: 4px 2px 20px 0 rgba(35, 35, 35, 0.1);
            display: flex;
            flex-direction: column;
            background-color: white;
            @include pre-desktop {
                max-width: 313px;
            }

            .main {
                display: flex;
                flex-direction: column;
                gap: 16px;
                border-bottom: 1px rgb(162, 162, 162) solid;
                margin-bottom: 20px;
                align-items: flex-start;

                .logo {
                    height: 40px;
                    width: 50%;
                    display: flex;
                    align-items: center;

                    img {
                        max-height: 40px;
                        max-width: 100%;

                    }
                }

                h2 {
                    color: rgba(34, 34, 34, 1);
                    font-weight: 700;
                    font-size: 16px;
                }

                p {
                    color: rgb(115, 115, 115);
                    font-size: 14px;
                    font-weight: 400;
                    margin-bottom: 12px;
                }

            }

            dl {
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-bottom: 20px;

                div {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;

                    dt {
                        font-size: 14px;
                        font-weight: 400;
                        color: rgb(162, 162, 162);
                        white-space: nowrap;
                    }

                    dd {
                        font-size: 16px;
                        font-weight: 400;
                        color: rgba(34, 34, 34, 1);
                    }
                }
            }

            a.link {
                color: rgba(34, 34, 34, 1);
                font-weight: 400;
                font-size: 16px;
                width: 100%;
                background-color: rgb(255, 214, 0);
                padding: 11px 30px;
                text-align: center;
                margin-top: auto;

                &:hover {
                    background-color: black;
                    color: white;
                }
            }
        }
    }
}

.hero {
    background-image: url('/images/hero_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    width: 100%;
    position: relative;
    overflow: hidden;
    padding-bottom: 2px;


    .wave {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
    }

    .container {
        display: flex;
        flex-direction: column;
        padding-top: 40px;
        @include pre-desktop {
            flex-direction: row;
            flex-wrap: nowrap;
            padding-top: 0;
            height: 100%;
            justify-content: space-between;
        }

        .img {
            width: 100%;
            display: flex;
            justify-content: center;

            @include pre-desktop {
                width: fit-content;
                justify-content: flex-end;
                align-items: flex-end;
            }

            img {
                width: 100%;
                max-width: 380px;
                @include pre-desktop {
                    width: unset;
                    max-width: 430px;
                    max-height: 430px;
                }
                @include desktop {
                    max-width: 500px;
                    max-height: 500px;
                }
            }
        }

        .text {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            @include pre-desktop {
                justify-content: center;
                position: relative;
                z-index: 5;
                margin-bottom: 80px;
            }
            @include desktop {
                margin-bottom: 0;
            }

            h1 {
                color: rgb(34, 34, 34);
                font-weight: 700;
                font-size: 20px;
                text-align: center;
                max-width: 430px;

                @include tablet {
                    font-size: 32px;
                }
                @include pre-desktop {
                    text-align: start;
                }
                @include desktop {
                    font-size: 60px;
                }
            }

            p {
                font-weight: 400;
                color: rgb(34, 34, 34);
                font-size: 14px;
                text-align: center;
                max-width: 450px;
                @include tablet {
                    font-size: 18px;
                }
                @include pre-desktop {
                    text-align: start;
                }
                @include desktop {
                    font-size: 22px;
                }
            }
        }
    }
}


</style>