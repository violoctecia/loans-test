<script setup lang="ts">

</script>

<template>
    <header>
        <nuxt-link to="/" class="logo">
            <img src="/images/logo.svg" alt="">
        </nuxt-link>
    </header>
</template>

<style scoped lang="scss">
header {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
        max-height: 30px;

        img {
            max-height: 30px;
        }
    }
}
</style>