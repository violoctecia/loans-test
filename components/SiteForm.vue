<script setup lang="ts">

const motivs = [
    'Compra de mercancía',
    'Mejoras de vivienda',
    'Reparación o cambio de auto',
    'Salud Medicamento',
    'Vacaciones',
    'Pagar deudas',
    'Educación Utiles escolares',
    'Eventos',
    'Mejoras de negocio',
    'Otros',
];

const sum = [
    '1000 $',
    '1500 $',
    '2000 $',
    '2500 $',
    '3000 $',
    '3500 $',
    '4000 $',
    '4500 $',
    '5000 $',
    '5500 $',
    '6000 $',
    '6500 $',
    '7000 $',
    '7500 $',
    '8000 $',
    '8500 $',
    '9000 $',
    '9500 $',
    '10000 $',
    '10500 $',
    '11000 $',
    '11500 $',
    '12000 $',
];

const period = [
    '3 meses',
    '4 meses',
    '5 meses',
    '6 meses',
    '7 meses',
    '8 meses',
    '9 meses',
    '10 meses',
    '11 meses',
    '12 meses',
    '13 meses',
    '14 meses',
    '15 meses',
    '16 meses',
    '17 meses',
    '18 meses',
    '19 meses',
    '20 meses',
    '21 meses',
    '22 meses',
    '23 meses',
    '24 meses',
    '25 meses',
    '26 meses',
    '27 meses',
    '28 meses',
    '29 meses',
    '30 meses',
    '31 meses',
    '32 meses',
    '33 meses',
    '34 meses',
    '35 meses',
    '36 meses',
];

const userData = reactive({
    loanReason: '',
    mobilePhone: '',
    amount: '',
    selectedPeriod: '',
    firstName: '',
    paternalSurname: '',
    maternalSurname: '',
    email: '',
});

const stage = ref(1);
const errorMessage = ref('');
const successMessage = ref('')

const props = defineProps<{
    link: string
}>()

const submit = async () => {
    successMessage.value = ''
    errorMessage.value = ''
    if (stage.value === 1) {
        if (userData.selectedPeriod && userData.loanReason && userData.amount  &&  userData.mobilePhone &&
            userData.mobilePhone.length === 12) {
            stage.value += 1;
            errorMessage.value = '';
        } else {
            errorMessage.value = 'Por favor, complete todos los campos.';
        }
    } else {
        if (userData.firstName && userData.paternalSurname && userData.maternalSurname && userData.email) {
            errorMessage.value = '';
            try {
                await $fetch('/api/ntf', {
                    method: 'POST',
                    body: {link: props.link, ...userData}
                });

                successMessage.value = '¡Hemos recibido tu solicitud! Nuestro asesor se pondrá en contacto contigo pronto.';
                // @ts-ignore
                if (typeof window.fbq === 'function') {
                    // @ts-ignore
                    window.fbq('track', 'Lead');
                }
            } catch (e) {
                errorMessage.value = 'Parece que ocurrió un error. Por favor, intenta de nuevo más tarde.';
            }
        } else {
            errorMessage.value = 'Por favor, complete todos los campos.';
        }
    }
};


</script>

<template>
    <section id="form">
        <div class="container">
            <h2>Completa tu solicitud de crédito en 2 pasos</h2>

            <form @submit.prevent="submit">
                <template v-if="!successMessage">
                    <div class="stage" v-show="stage === 1">
                        <div class="input">
                            <label for="loanReason">Motivo del préstamo</label>
                            <select id="loanReason" v-model="userData.loanReason" required>
                                <option disabled value="">Seleccione una opción</option>
                                <option v-for="item in motivs" :key="item" :value="item">{{ item }}</option>
                            </select>
                        </div>

                        <div class="input">
                            <label for="amount">Monto solicitado</label>
                            <select id="amount" v-model="userData.amount" required>
                                <option disabled value="">Seleccione una opción</option>
                                <option v-for="item in sum" :key="item" :value="item">{{ item }}</option>
                            </select>
                        </div>

                        <div class="input">
                            <label for="period">Plazo del préstamo</label>
                            <select id="period" v-model="userData.selectedPeriod" required>
                                <option disabled value="">Seleccione una opción</option>
                                <option v-for="item in period" :key="item" :value="item">{{ item }}</option>
                            </select>
                        </div>

                        <div class="input">
                            <label for="mobilePhone">Teléfono móvil</label>
                            <input
                                id="mobilePhone"
                                v-model="userData.mobilePhone"
                                v-mask="'##-####-####'"
                                placeholder="55-5428-7540"
                                required
                            />
                        </div>
                    </div>

                    <div class="stage" v-show="stage === 2">
                        <div class="input">
                            <label for="name">Nombre(s)</label>
                            <input id="name" placeholder="Ingresa tu nombre" v-model="userData.firstName" required>
                        </div>

                        <div class="input">
                            <label for="paternalSurname">Apellido paterno</label>
                            <input id="paternalSurname" placeholder="Ingresa tu apellido paterno"
                                   v-model="userData.paternalSurname" required>
                        </div>

                        <div class="input">
                            <label for="maternalSurname">Apellido materno</label>
                            <input id="maternalSurname" placeholder="Ingresa tu apellido materno"
                                   v-model="userData.maternalSurname" required>
                        </div>

                        <div class="input">
                            <label for="email">Correo electrónico</label>
                            <input type="email" id="email" placeholder="Ingresa tu correo" v-model="userData.email"
                                   required>
                        </div>
                    </div>
                </template>

                <span v-if="errorMessage" style="color: red">{{ errorMessage }}</span>
                <span v-if="successMessage" style="color: green">{{ successMessage }}</span>

                <template v-if="!successMessage">
                    <button type="button" @click="submit()" v-show="stage === 1">Continuar</button>
                    <button type="submit" v-show="stage === 2">Enviar solicitud</button>
                </template>
            </form>
        </div>
    </section>
</template>


<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    max-width: 450px;
    margin: 0 auto;

    span {
        color: red;
        font-weight: 400;
        font-size: 14px;
    }

    button {
        color: rgba(34, 34, 34, 1);
        font-weight: 400;
        font-size: 16px;
        width: 100%;
        background-color: white;
        padding: 11px 30px;
        text-align: center;
        margin-top: auto;


        &:hover {
            background-color: black;
            color: white;
        }
    }
}

.stage {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;


    .input {
        display: flex;
        flex-direction: column;
        gap: 4px;

        select, input, :deep(input) {
            appearance: none;
            padding: 10px 14px;
            border-radius: 6px;
            border: 1px solid #d8d8d8;
            color: #000;
            font-size: 16px;

            @include desktop {
                padding: 8px 12px;
            }

            &::placeholder {

                color: #6C6B6BFF;
            }
        }

        label {
            color: #6C6B6BFF;
            font-size: 14px;
            font-weight: 400;
        }

    }
}

section {
    background-image: linear-gradient(rgba(245, 245, 245, 1) 0%, rgb(255, 214, 0) 100%);
    padding: 60px 0;

}

h2 {
    color: rgb(34, 34, 34);
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    margin-bottom: 45px;
}
</style>