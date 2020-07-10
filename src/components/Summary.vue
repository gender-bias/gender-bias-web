<template>
    <div id = 'summary'>
        <h1> {{message.issue.problem }}</h1>
        <p> {{message.text}} </p> 
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