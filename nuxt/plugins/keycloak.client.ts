import Keycloak from 'keycloak-js';

export default defineNuxtPlugin(async() => {
  const keycloak = await initializeKeycloak();
  return {
    provide: {
      keycloak,
    }
  }
})


// Função para inicializar o Keycloak
async function initializeKeycloak() {
  const initOptions = {
    url: 'http://localhost:8080',
    realm: 'nuxt',
    clientId: 'app',
    onLoad: 'login-required' as 'login-required',
  };

  const keycloak = new Keycloak(initOptions);

  try {
    // Espera a inicialização ser concluída
    const authenticated = await keycloak.init({ onLoad: initOptions.onLoad });
    keycloak.authenticated = (authenticated) ? true : false

    if (!authenticated) {
      console.error('Usuário não autenticado!');
      window.location.reload();
    }

    return keycloak;
  } catch (error) {
    console.error('Erro ao inicializar Keycloak', error);
    throw new Error('Falha ao Autenticar OAuth');
  }
}
