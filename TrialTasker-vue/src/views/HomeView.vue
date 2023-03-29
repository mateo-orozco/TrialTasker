<template>
  <div class="main">
    <div class="CasosActivos">
      <div class="informacion">
        <h2>Numero de Casos Activos</h2>
        <p>1</p>
      </div>
    </div>
    <div class="InformacionUsuario">
      <div class="informacion">
        <h2>Usuario:<span>{{ auth.user.name }} {{ auth.user.lastname }}</span></h2>
        <h2>Casos Totales:</h2>
        <h2>Nose que mas poner xD</h2>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/authStore";
import LOGO from "@/components/logo/Logo.vue";
import Button from "../components/buttons/Button.vue";
import { onMounted } from 'vue';

const authStore = useAuthStore();
const auth = useAuthStore();

onMounted(() => {
  auth.getUser();
})
</script>

<style scoped>
.main {
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.CasosActivos {
  border: solid 1px;
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
}

.InformacionUsuario {
  border: solid 1px;
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>