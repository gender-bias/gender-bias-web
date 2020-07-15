<template>
    <div id = 'summary'>
        <div class = 'issue' v-if = "summary.text.length >= 2" >
            <h3> {{summary.title}} </h3> 
            <p class = 'summary'> <strong> — </strong>  &nbsp; {{summary.text}} </p>
            <!--<p class = 'suggestion'> &nbsp; {{message.issue.suggestion}} </p>-->
        </div> 
    </div> 

</template>

<script>
export default {
    name: "Summary",
    props: {
        summary: {
            type: String
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