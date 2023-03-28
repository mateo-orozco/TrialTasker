<template>
    <nav class="pagination" v-if="last_page!=1">
        <ul class="pagination__ul">
            <li class="page-item" v-for="page in links" >
                <a class="page-link" @click="this.funtion_page(page.url)" v-html="page.label" :class="{ 'disabled':  page.url === null , 'active':  current_page == page.label}"></a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    const props = defineProps({
        last_page: {
            type: Number,
            required: true
        },
        current_page: {
            type: Number,
            required: true
        },
        links: {
            type: Array,
            required: true
        },
        funtion_page: {
            type: Function,
            required: true
        }
    })
</script>

<style scoped>
    .pagination__ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin-top: 10px;
    }
    .page-link {
        color: var(--black);
        text-decoration: none;
        cursor: pointer;
        padding:  0.5rem 0.75rem;
        border: 1px solid var(--my-hover-ligth);
        
    }

    .page-link:hover {
        background-color: #4f5d60;
        color: white;
    }

    .disabled {
        color: var(--brown);
        background-color: white;
        border: 1px solid var(--my-hover-ligth);
        pointer-events: none;
    }

    .active {
        background-color: #4f5d60;
        color: white;
    }


</style>