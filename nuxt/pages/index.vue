<script setup>
const { $keycloak } = useNuxtApp(); // Acessa o plugin global
</script>

<template>
  <div>
    <div v-if="$keycloak.authenticated">LOGADO</div>
    <div v-else>NAO LOGADO</div>
  </div>
</template>
