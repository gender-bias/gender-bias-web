<template>
    <div id="app">
        <Header />
        <Readout @submit="onSubmit()" :text="text" :inputText="inputText" :messages="messages" />
        <Footer />
    </div>
</template>

<script>
import Readout from "@/components/Readout.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const URL = "http://localhost:5000";

export default {
    name: "App",
    components: {
        Header,
        Footer,
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
        }
    }
};
</script>

<style>
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: "Roboto Slab", Georgia, "Times New Roman";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
