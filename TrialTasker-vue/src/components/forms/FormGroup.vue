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

<style >
.form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.label {
    font-size: 1.2em;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}

.form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}
</style>