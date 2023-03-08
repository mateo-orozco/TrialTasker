<template>
  <div class="main">
    <div class="asidebar">
      <div class="top">
        <LOGO />
      </div>
      <div class="half">
        <div class="start">
          <!-- Boton de Inicio -->
          <RouterLink :to="{ name: 'ForgotPassword' }">
            <svg class="icon icon-home" id="imageStart">
              <use xlink:href="#icon-home">
                <symbol id="icon-home" viewBox="0 0 32 32">
                  <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z">
                  </path>
                </symbol>
              </use>
            </svg>Inicio
          </RouterLink>
        </div>

        <div class="cases">
          <!-- Boton de Casos Activos -->
          <RouterLink :to="{ name: 'ForgotPassword' }">
            <svg class="icon icon-travel-case" id="imageCases">
              <use xlink:href="#icon-travel-case">
                <symbol id="icon-travel-case" viewBox="0 0 20 20">
                  <path
                    d="M14 5h2v14h-12v-14h2v-1c0-1.105 0.895-2 2-2v0h4c1.105 0 2 0.895 2 2v0 1zM17 5h1c1.105 0 2 0.895 2 2v0 10c0 1.105-0.895 2-2 2v0h-1v-14zM3 5v14h-1c-1.105 0-2-0.895-2-2v0-10c0-1.1 0.9-2 2-2h1zM8 4v1h4v-1h-4z">
                  </path>
                </symbol>
              </use>
            </svg>Casos Activos
          </RouterLink>
        </div>
        
        <div class="cases">
          <!-- Boton de Casos Inactivos -->
          <RouterLink :to="{ name: 'ForgotPassword' }">
            <svg class="icon icon-travel-case" id="imageCases">
              <use xlink:href="#icon-travel-case">
                <symbol id="icon-travel-case" viewBox="0 0 20 20">
                  <path
                    d="M14 5h2v14h-12v-14h2v-1c0-1.105 0.895-2 2-2v0h4c1.105 0 2 0.895 2 2v0 1zM17 5h1c1.105 0 2 0.895 2 2v0 10c0 1.105-0.895 2-2 2v0h-1v-14zM3 5v14h-1c-1.105 0-2-0.895-2-2v0-10c0-1.1 0.9-2 2-2h1zM8 4v1h4v-1h-4z">
                  </path>
                </symbol>
              </use>
            </svg>Casos Inactivos
          </RouterLink>
        </div>

        <div class="finance">
          <!-- Boton de Finanzas -->
          <RouterLink :to="{ name: 'ForgotPassword' }">
            <svg class="icon icon-clipboard" id="imagenFinance">
              <use xlink:href="#icon-clipboard">
                <symbol id="icon-clipboard" viewBox="0 0 20 20">
                  <path
                    d="M7.030 2.6c0.215-1.465 1.462-2.577 2.97-2.577s2.755 1.112 2.968 2.561l0.002 0.016 2.030 0.4v1h1c1.105 0 2 0.895 2 2v0 12c0 1.105-0.895 2-2 2v0h-12c-1.105 0-2-0.895-2-2v0-12c0-1.1 0.9-2 2-2h1v-1l2.030-0.4zM5 6h-1v12h12v-12h-1v1h-10v-1zM10 4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0c-0.552 0-1 0.448-1 1s0.448 1 1 1v0z">
                  </path>
                </symbol>
              </use>
            </svg>Finanzas
          </RouterLink>
        </div>

      </div>
      <div class="lower">
        <button class="profile">
          <svg class="icon icon-user-solid-circle" id="imagenProfile">
            <use xlink:href="#icon-user-solid-circle">
              <symbol id="icon-user-solid-circle" viewBox="0 0 20 20">
                <path
                  d="M10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM7 6v2c0 1.657 1.343 3 3 3s3-1.343 3-3v0-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v0zM3.35 14.44c1.456 2.155 3.89 3.553 6.65 3.553s5.194-1.398 6.632-3.525l0.018-0.028c-1.951-0.918-4.238-1.453-6.65-1.453s-4.699 0.536-6.748 1.495l0.098-0.041z">
                </path>
              </symbol>
            </use>
          </svg>Marco Perez
        </button>
      </div>
    </div>
    <div class="container">
      <main>
        <h1>Home</h1>
        <button @click="authStore.handleLogout">Salir</button>
      </main>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/authStore";
import LOGO from "@/components/logo/Logo.vue";

const authStore = useAuthStore();
</script>
