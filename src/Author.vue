<template>
    <small>Wriiten by {{ author.firstName }} {{ author.lastName }}</small>
</template>

<script>
import { eventBus } from './main';

export default {
    // props:['author'],
    props:{
        author: {
            type: Object,
            required: true,
        }
    },
    created() { 
        eventBus.$on('articleWasShared',(data)=>{
            alert('Someone shared an article on ' + data.media + '!');
        });
    }
}
</script>