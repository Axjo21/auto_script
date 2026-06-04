<script setup lang="ts">
</script>

<template>
    <section id="welcome-section">
        <div>
            <h1>Welcome</h1>
        </div>
    </section>
</template>

<style>

#welcome-section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 85svh;
    @media (max-width: 1024px) {
        padding: 32px 20px 24px;
        gap: 18px;
    }
}

</style>