<template>
    <div class="container">
        <div class="section">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <span class = "wrapper">
                        <div class = "readout_container">
                            <div class="readout">
                                <div v-if="!rendered">
                                    <textarea
                                        v-model="inputText"
                                        v-bind:style="{width: widthVal}"
                                        class="textarea text-input"
                                        placeholder="Paste your letter of recommendation here."
                                    ></textarea>
                                    <div class="btn-container">
                                        <button
                                            class="button is-info is-fullwidth submit-button"
                                            v-on:click="renderIssues" 
                                            @click = "showSidebar(); hideHeader(); changeWidth()"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                <div v-if="rendered">
                                    <button
                                        class="button is-primary is-fullwidth back-button"
                                        v-on:click="
                                            () => {
                                            rendered = false;
                                            }
                                        "
                                    >
                                        &leftarrow; Again!
                                    </button>
                                    <div class = 'blurbs' v-bind:style="{width: widthVal}">
                                        <Blurb
                                        v-for="message in messages"
                                        :key="message.rnd"
                                        :message="message"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class ='sidebar_container' v-if = 'sidebarStatus'>
                            <div class = 'sidebar'> 
                                <p> Try to make the following changes: </p> 
                                <Summary v-for="summary in summaries"
                                 :key= "summary.rnd"
                                 :summary ="summary" />
                            </div> 
                        </div>
                    </span> 
                </div>
            </div>
        </div> 
    </div>
    
</template>
<script>
import Blurb from "./Blurb";
import Summary from "./Summary.vue"
const URL = "http://localhost:5000";
export default {
    name: "Main",
    components: {
        Blurb,
        Summary
    },
    data() {
        return {
            text: "",
            inputText: "",
            messages: [],
            summaries: [],
            rendered: false,
            sidebarStatus: false,
            widthVal: '700px'

        };
    },
    methods: {
        showSidebar() {
            this.sidebarStatus = true; 
        },
        hideHeader() {
            this.$emit('hideHeader'); 
        },
        changeWidth(){
            if (this.widthVal === '700px'){
                this.widthVal ='425px';
            }
        },
        renderIssues() {
            this.rendered = true;
            fetch(`${URL}/check`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    text: this.inputText
                })
            })
                .then(res => res.json())
                .then(payload => {
                    let issues = [];
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
                        issues = issues.concat(issue);
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
                        }
                    });
                    this.summaries = issues.map(issue => {
                        return { 
                            text: issue.summary,
                            title: issue.name,
                            rnd: Math.random()
                        };
                    });
                });
        }
    }
};
</script>
<style lang="scss">
$errorful: rgba(172, 0, 0, 0.845);
$warningful: rgba(191, 94, 9, 0.845);
a {
    color: #015c5f;
}
.container {
    margin: 0 auto; 
    position: relative; 
    width: 100%; 
}
.readout {
    margin: auto;
    text-align: justify;
    white-space: pre-line;
}
.text-input {
    padding: 1em;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 12pt;
    min-height: 40vh !important;
}
.sidebar_container {
    width: 200px; 
    margin-right: 10px;
    border: 1px; 
    vertical-align: middle; 
    height: 500px; 
    padding: 20px;
    overflow: scroll; 
    float: left; 
    overflow-x: hidden; 
}
.readout_container {
    float: right; 
    padding: 10px; 
}
.wrapper {
    width: 100%; 
    text-align: left; 
    display: inline-block;
}
#sidebar_container   {
    font-size: 8pt; 
    text-align: center;
}

.button {
    margin-bottom: 15px; 
}
</style>
