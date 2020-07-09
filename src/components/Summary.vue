<template>
    <div id = 'summary'>
        <p> {{Summary}} </p> 
    </div> 

</template>

<script>
export default {
    name: "Summary",
    props: {
        message: {
            type: Object
        }
    },
}
</script>

<style scoped>

</style>