<template>
    <div id = 'summary'>
        <div class = 'issue'>
            <p class = 'problem'> &nbsp; {{message.issue.problem }} </p>
            <p class = 'suggestion'> &nbsp; {{message.issue.suggestion}} </p>
        </div> 
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
.issue:hover {
    background: rgb(98, 176, 240); 
    color: white; 
}
</style>