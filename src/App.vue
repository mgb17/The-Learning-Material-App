<template>
    <TheHeader title="Don't Forget" />
    <StoredResources :resources="storedResources" />
  
</template>

<script>

import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue'

export default {
    components: {
        StoredResources,
        TheHeader
    },
    data() {
        return {
            storedResources: [
                { 
                  id: 'official-guide',
                  title: 'Official Guide',
                  description: 'The official Vue.js documentation',
                  link: 'https://vuejs.org'
                },
                { 
                  id: 'google',
                  title: 'Google',
                  description: 'How to google to learn effectively',
                  link: 'https://google.com'
                },
            ]
        };
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>