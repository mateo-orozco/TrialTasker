
<template>
  <div class="main">
    <div class="asidebar">
      <div class="top">
        <LOGO />
      </div>
      <div class="half">
        <button class="start"><svg class="icon icon-home" id="imageStart">
            <use xlink:href="#icon-home">
              <symbol id="icon-home" viewBox="0 0 32 32">
                <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
              </symbol>
            </use>
          </svg>Inicio</button>
        <button class="cases"><svg class="icon icon-travel-case" id="imageCases">
            <use xlink:href="#icon-travel-case">
              <symbol id="icon-travel-case" viewBox="0 0 20 20">
                <path
                  d="M14 5h2v14h-12v-14h2v-1c0-1.105 0.895-2 2-2v0h4c1.105 0 2 0.895 2 2v0 1zM17 5h1c1.105 0 2 0.895 2 2v0 10c0 1.105-0.895 2-2 2v0h-1v-14zM3 5v14h-1c-1.105 0-2-0.895-2-2v0-10c0-1.1 0.9-2 2-2h1zM8 4v1h4v-1h-4z">
                </path>
              </symbol>
            </use>
          </svg>Casos Activos</button>
          <button class="cases"><svg class="icon icon-travel-case" id="imageCases">
            <use xlink:href="#icon-travel-case">
              <symbol id="icon-travel-case" viewBox="0 0 20 20">
                <path
                  d="M14 5h2v14h-12v-14h2v-1c0-1.105 0.895-2 2-2v0h4c1.105 0 2 0.895 2 2v0 1zM17 5h1c1.105 0 2 0.895 2 2v0 10c0 1.105-0.895 2-2 2v0h-1v-14zM3 5v14h-1c-1.105 0-2-0.895-2-2v0-10c0-1.1 0.9-2 2-2h1zM8 4v1h4v-1h-4z">
                </path>
              </symbol>
            </use>
          </svg>Casos Inactivos</button>
      </div>
      <div class="lower">

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
import { useAuthStore } from '@/stores/authStore'
import LOGO from '@/components/logo/Logo.vue'

const authStore = useAuthStore()
</script>