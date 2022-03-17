<template>
    <div class="articale">
        <h1>{{ title }}</h1>
        <p>Published on {{ published }}</p>
        <p>Shares: {{ shares }}</p>

        <p class="lead">{{ content }}</p>
        <app-author :author="author"></app-author>
    </div>
</template>
<script>
import Author from './Author.vue';
export default {
    data() {
        return {
            title: '10 reasons why Vue.js is awesome', 
            published: new Date(),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            author: {
                firstName: 'Talha',
                lastName: 'Ishaq'
            },
            shares: 0,
        }
    },
    components: {
        appAuthor: Author,
        }
}
</script>