<template>
    <div class="container">
        <div class="section">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <!-- the container that includes the sidebar and the textArea with Blurbs --> 
                    <span class = "wrapper">
                        <div class = "readoutContainer" v-bind:style ="{float: floatVal, width: widthVal}">
                            <div class="readout">
                                <div v-if="!rendered">
                                    <textarea
                                        v-model="inputText"
                                        class="textarea text-input"
                                        placeholder="Paste your letter of recommendation here."
                                    ></textarea>
                                    <div class="btn-container">
                                        <button
                                            class="button is-info is-fullwidth submit-button"
                                            v-on:click="render()"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                <div v-if="rendered">
                                    <button
                                        class="button is-primary is-fullwidth back-button"
                                        v-on:click="onClickAgain()"
                                    >
                                        &leftarrow; Again!
                                    </button>
                                    <div class = 'blurbs'>
                                        <Blurb
                                        v-for="message in messages"
                                        :key="message.rnd"
                                        :message="message"
                                        :highlight="message.issue.category === highlightStr"
                                        @blurb-highlighted="highlightIssue"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class ='sidebarContainer' v-if = 'sidebarStatus'>
                            <div class = 'sidebar'> 
                                <p> Try to make the following changes: </p> 
                                <Summary v-for="summary in summaries"
                                 @summary-highlighted="highlightIssue"
                                 :key= "summary.rnd"
                                 :summary ="summary"
                                 :highlight ="summary.title === highlightStr"
                                 />
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
import uniqueId from 'lodash.uniqueid';
const URL = "https://api.biascorrect.org";
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
            widthVal: '100%',
            floatVal: 'none',
            highlightStr: String,
        };
    },

    methods: {

        highlightIssue(issue){
            this.highlightStr = issue;
        },

        onClickAgain() {
            this.rendered = false; 
        },

        render() {
            this.renderIssues();
            this.sidebarStatus = true;
            this.$emit('hideHeader');
            this.changeWidth();
        },

        changeWidth(){
            if (this.widthVal === '100%'){
                this.widthVal ='70%';
                this.floatVal ='right'; 
            }
        },

        async fetchJSON(){
            const res = await fetch(`${URL}/check`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    text: this.inputText
                })
            });
            return await res.json();
        },

        mapFlag(issue){
            return issue.flags.map(f => {
                return {
                    start: f[0],
                    end: f[1],
                    category: f[2],
                    problem: f[3],
                    suggestion: f[4],
                    bias: f[5]
                };
            });
        },

        getFlags(issues){
            let flags = [
                {   
                    start: 0,
                    end: 0,
                    category: "",
                    problem: ""
                }
            ];

            let firstFlag = issues[0].flags;

            //if flag at beginning of text, remove dummy start flag 
            if(firstFlag.length > 0 && firstFlag[0][0] === 0){
                flags = [];
            }

            issues.map(issue => 
                flags = flags.concat(this.mapFlag(issue)));
            return flags;
        },

         getBlurbs(text, flags) {
            //splits and demarcates text into blurbs
            //using the start and end indices of flags
            let textArray = text.split("");
            // Create an empty element at the beginning of the text so, 
            // textArray[0] is an empty element instead of the beginning of the text.
            textArray.unshift(""); 
            // Modifies the text into flags with their order, e.g. ||#number||flag
            for (const [i, flag] of flags.entries()) {
                // Checks if the flag is in the middle, so it includes 
                // the flagged word's punctuation
                textArray[flag.end] = textArray[flag.end]  === ' ' || textArray[flag.end] === '\n'
                ? "[!]||||" + textArray[flag.end]
                : textArray[flag.end] + "[!]||||";
                // Adds the order number of the flag. 
                textArray[flag.start] = `[!]||${i}||` + textArray[flag.start];
            }
            // Splits the text into an array of flags
            textArray = textArray.join("").split("[!]"); 
            textArray.shift(); 
            // Removes the last element if it is empty or undefined
            if (textArray[-1] === '||||undefined' || textArray[-1] === '||||'){
                textArray.pop(); 
            }
            return textArray; 
        },

        getMessages(text, flags, messages){
            return messages.map(text => {
                return {
                    text: text.split("||")[2],
                    rnd: uniqueId('message-'),
                    issue: text.split("||")[1]
                        ? flags[parseInt(text.split("||")[1])]
                        : false
                }
            });
        },

        getSummaries(issues){
            return issues.map(issue => {
                return { 
                    text: issue.summary,
                    title: issue.name,
                    rnd: uniqueId('summary-')
                };
            });
        },

        renderIssues() {
            this.fetchJSON()
                .then(payload => {
                    const issues = payload.issues;
                    const flags = this.getFlags(issues);
                    const text = payload.text;
                    const messages = this.getBlurbs(text, flags);
                    this.messages = this.getMessages(text, flags, messages);
                    this.summaries = this.getSummaries(issues);
                });

            this.sidebarStatus = true;
            this.$emit('hideHeader');
            this.changeWidth();

            this.rendered = true;
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
    width: 100%; 
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
.sidebarContainer {
    width: 27%; 
    margin-right: 1%;
    border: 1px; 
    vertical-align: middle; 
    height: 50%; 
    padding: 1%;
    overflow: scroll; 
    float: left; 
    overflow-x: hidden; 
}
.readoutContainer {
    padding: 1.5%; 
}
.wrapper {
    width: 100%; 
    text-align: left; 
    display: inline-block;
}
#sidebarContainer   {
    font-size: 8pt; 
    text-align: center;
}
.button {
    margin-bottom: 0.5%; 
}
</style>
