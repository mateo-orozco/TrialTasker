<template>
    <div class="entry">
        <div class="card__entry">
            <div class="entry__logo">
                <Logo />
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/components/logo/Logo.vue'
</script>