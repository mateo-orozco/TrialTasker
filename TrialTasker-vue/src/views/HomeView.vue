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
      <!-- Boton del usuario -->
      <div class="lower">
        <nav class="menu">
          <ul>
            <li>
              <RouterLink :to="{ name: 'ForgotPassword' }">
                <svg class="icon icon-user-solid-circle" id="imagenProfile">
                  <use xlink:href="#icon-user-solid-circle">
                    <symbol id="icon-user-solid-circle" viewBox="0 0 20 20">
                      <path
                        d="M10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM7 6v2c0 1.657 1.343 3 3 3s3-1.343 3-3v0-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v0zM3.35 14.44c1.456 2.155 3.89 3.553 6.65 3.553s5.194-1.398 6.632-3.525l0.018-0.028c-1.951-0.918-4.238-1.453-6.65-1.453s-4.699 0.536-6.748 1.495l0.098-0.041z">
                      </path>
                    </symbol>
                  </use>
                </svg>Marco Perez
              </RouterLink>
              <ul>
                <li>
                  <RouterLink :to="{ name: 'ForgotPassword' }">
                    <svg class="icon icon-cog" id="imageConf">
                      <use xlink:href="#icon-cog">
                        <symbol id="icon-cog" viewBox="0 0 32 32">
                          <path
                            d="M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z">
                          </path>
                        </symbol>
                      </use>
                    </svg>Configuracion
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'ForgotPassword' }">
                    <svg class="icon icon-user" id="imageUser">
                      <use xlink:href="#icon-user">
                        <symbol id="icon-user" viewBox="0 0 32 32">
                          <path
                            d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z">
                          </path>
                        </symbol>
                      </use>
                    </svg>Perfil
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'ForgotPassword' }">
                    <svg class="icon icon-exit" id="imageExit">
                      <use xlink:href="#icon-exit">
                        <symbol id="icon-exit" viewBox="0 0 32 32">
                          <path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z">
                          </path>
                        </symbol>
                      </use>
                    </svg>Cerrar Sesion
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

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
