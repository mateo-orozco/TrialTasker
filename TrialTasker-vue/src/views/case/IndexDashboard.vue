.<template>
    <HeaderTableVue title="Casos" to="CaseDashboardCreate"/>
    <TableDashboard :thead ="thead" :data="cases.cases.data" v-if="cases.cases.data" :delete="cases.deleteCase" edit="CaseDashboardUpdate"/>
    <Pagination :last_page="cases.cases.last_page" :current_page="cases.cases.current_page" :links="cases.cases.links" :funtion_page="cases.getCasesPage" v-if="cases.cases.links"/>
</template>

<script setup>
import HeaderTableVue from '@/components/headers/HeaderTable.vue';
import TableDashboard from '@/components/Tables/TableDashboard.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted } from 'vue';
import { useCaseStore } from '../../stores/caseStore';

const cases = useCaseStore();
const thead = [
    {
        name: 'Nombre',
        key: 'case_name',
    },
    {
        name: 'Radicado',
        key: 'case_radicate',
    },
    {
        name: 'Cliente',
        key: 'case_person',
        key_2: 'per_name',
    },
    {
        name: 'Abogado',
        key: 'case_user',
        key_2: 'name',
    },
]
onMounted(() => {
    cases.getCases();
});


</script>

<style>

</style>