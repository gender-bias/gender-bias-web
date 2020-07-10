<template>
    <div id="app">
<<<<<<< HEAD
        <Header v-if = 'header_status'/>     
        <div v-if ="sidebar_status">    
            <Sidebar /> 
        </div> 
        <div class = 'main_content'> 
            <Readout @displaySidebar = '_displaySidebar(true)' @hideHeader = '_hideHeader(false)'> </Readout>
        </div> 
=======
        <Header />
        <Readout @submit="onSubmit()" :text="text" :inputText="inputText" :messages="messages" />
>>>>>>> 6daf081f5f564f4f8f52ead96480a1870ab2c90d
        <Footer />
    </div>
</template>

<script>
import Readout from "@/components/Readout.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue"; 

const URL = "http://localhost:5000";

export default {
    name: "App",
    components: {
        Header,
        Footer,
<<<<<<< HEAD
        Readout,
        Sidebar
    },
    data() {
        return {
            sidebar_status: false,
            header_status: true
        }
    },
    methods: {
        _displaySidebar(data){
            this.sidebar_status = data;
        },
        _hideHeader(data) {
            this.header_status = data; 
=======
        Readout
    }, 
    data() {
        return {
            text: "",
            inputText: "",
            messages: []
        };
    },
    methods: {
        onSubmit() {
            console.log("Got submit event");
            fetch(`${URL}/check`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    text: this.inputText
                })
            })
                .then(res => res.json())
                .then(payload => {
                    let flags = [
                        {
                            start: 0,
                            end: 0,
                            category: "",
                            problem: ""
                        }
                    ];
                    let text = payload.text;
                    for (const issue of payload.issues) {
                        flags = flags.concat(
                            issue.flags.map(f => {
                                return {
                                    start: f[0],
                                    end: f[1],
                                    category: f[2],
                                    problem: f[3],
                                    suggestion: f[4],
                                    bias: f[5]
                                };
                            })
                        );
                    }
                    let renderTextArray = text.split("");
                    for (const [i, flag] of flags.entries()) {
                        renderTextArray[flag.end] =
                            "[!]||||" + renderTextArray[flag.end];
                        renderTextArray[flag.start] =
                            `[!]||${i}||` + renderTextArray[flag.start];
                    }
                    let messages = renderTextArray.join("").split("[!]");
                    this.messages = messages.map(text => {
                        return {
                            text: text.split("||")[2],
                            rnd: Math.random(),
                            issue: text.split("||")[1]
                                ? flags[parseInt(text.split("||")[1])]
                                : false
                        };
                    });
                });           
>>>>>>> 6daf081f5f564f4f8f52ead96480a1870ab2c90d
        }
    }
};
</script>

<style>

*{
    padding: 0; 
    margin: 0; 
    box-sizing: border-box;
    list-style: none; 
    text-decoration: none;
}
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: "Roboto Slab", Georgia, "Times New Roman";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 30px;
}
.main_content {
     margin-left: 50px;
}   
</style>
