<template>
    <div class="form-group">
        <label class="label">{{ label }}:</label>
        <slot>

        </slot>
        <p class="error" v-if="error != []">{{ error[0] }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    }, error: {
        type: Array,
        default: []
    }
})

</script>

<style scoped>
.form-group {
    max-width: 400px;
    display: flex;
    justify-content: center;
}

.label {
    font-size: 1.2em;
}

.input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
}
</style>