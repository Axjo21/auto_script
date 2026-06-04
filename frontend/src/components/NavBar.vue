<script setup lang="ts">
</script>

<template>
    <nav id="navbar">
        <router-link to="/" class="router-link">Home</router-link>
        <router-link to="/dashboard" class="router-link">Dashboard</router-link>
    </nav>

    <router-view />
</template>

<style>

    #navbar {
        margin-top: 1.5em;
        display: flex;        
        justify-content: center;
    }

    .router-link {
        width: 150px;
        margin: 25px;
        padding: 0.5em;
        font-size: 1.5em;
        color: blue;
        background-color: rgb(229, 229, 229);
        border-radius: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>