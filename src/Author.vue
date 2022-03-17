<template>
    <small>Wriiten by {{ author.firstName }} {{ author.lastName }}</small>
</template>

<script>
export default {
    // props:['author'],
    props:{
        author: {
            type: Object,
            required: true,
        }
    }
}
</script>