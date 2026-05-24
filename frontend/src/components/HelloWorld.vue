<script setup lang="ts">
import heroImg from '../assets/hero.png'
</script>

<template>
    <section id="center">
        <div class="hero">
            <img :src="heroImg" class="base" width="170" height="179" alt="" />
        </div>
        <div>
            <h1>Welcome</h1>
        </div>
    </section>
</template>

<style>
.hero {
    position: relative;

    .base,
    .framework,
    .vite {
        inset-inline: 0;
        margin: 0 auto;
    }

    .base {
        width: 170px;
        position: relative;
        z-index: 0;
    }
}


#center {
    display: flex;
    flex-direction: column;
    gap: 25px;
    place-content: center;
    place-items: center;
    flex-grow: 1;

    @media (max-width: 1024px) {
        padding: 32px 20px 24px;
        gap: 18px;
    }
}

</style>