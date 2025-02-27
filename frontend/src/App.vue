<template>
  <app-layout>
    <transition name="view" appear mode="out-in">
      <router-view v-if="isLoaded" />
    </transition>
    <!-- <router-view v-slot="{ Component }">
      <transition name="view" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </app-layout>
</template>
<script setup>
import AppLayout from "@/layouts/AppLayout.vue"
import { onMounted, ref } from "vue"
import { useDataStore } from "@/stores/data"
import { useAuthStore } from "@/stores/auth"
import JwtService from "@/services/jwt/jwt.service"
import { router } from "@/router/index.js"
import { useRoute } from "vue-router"
// import { useRouter } from "vue-router"

const dataStore = useDataStore()
const route = useRoute()
const isLoaded = ref(false)

const checkLoggedIn = async () => {
  const authStore = useAuthStore()
  const token = JwtService.getToken()
  if (!token) {
    isLoaded.value = true
    return
  }

  try {
    await authStore.whoami()
    const { redirect } = route.query
    await router.push(redirect ? redirect : { name: "home" })
  } catch (e) {
    JwtService.destroyToken()
    console.error(e)
  } finally {
    isLoaded.value = true
  }
}

onMounted(() => {
  checkLoggedIn()
  dataStore.loadData()
})
</script>
<style lang="scss">
@import "@/assets/scss/app.scss";

.view-enter-active,
.view-leave-active {
  transition: all 0.5s ease-in-out;
}

.view-enter-from {
  opacity: 0;
  transform: translateX(25%);
}

.view-leave-to {
  opacity: 0;
  transform: translateX(-25%);
}

.view-enter-to,
.view-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
