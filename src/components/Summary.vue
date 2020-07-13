<template>
    <div id = 'summary'>
        <div class = 'issue' v-if = "message.issue.problem.length >= 2">
            <p class = 'problem'> <strong> — </strong>  &nbsp; {{message.issue.problem }} </p>
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
.issue {
    border: 1px solid; 
    border-color: grey; 
    margin-top: 3px; 
    margin-bottom: 3px; 
}
.issue:hover {
    background: rgb(98, 176, 240); 
    color: white; 
    
}

</style>