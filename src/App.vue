<template>
    <ul>
        <LearningResource v-for="res in storedResources" :key="res.id"
        :title="res.title" :description="res.description" :link="res.link" />
    </ul>
  
</template>

<script>

import LearningResource from './components/learning-resources/LearningResource';

export default {
    components: {
        LearningResource
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