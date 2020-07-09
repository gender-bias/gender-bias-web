<template>
    <div class="container">
        <div class="section">
            <div class="columns">
                <div class="column is-8 is-offset-2">
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
                                    v-on:click="renderIssues"
                                    @click = 'displaySidebar(); hideHeader()' 
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
                            <div id="feedback">
                                <Blurb
                                    v-for="message in messages"
                                    :key="message.rnd"
                                    :message="message"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Blurb from "./Blurb";

const URL = "http://localhost:5000";

export default {
    name: "Readout",
    components: {
        Blurb,
    },
    data() {
        return {
            text: "",
            inputText: "",
            messages: [],
            rendered: false
        };
    },
    methods: {
        renderIssues() {
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
                    this.rendered = true;
                });
        },
        displaySidebar(){
            this.$emit('displaySidebar', true); 
        },
        hideHeader() {
            this.$emit('hideHeader', false);
        }
    }
};
</script>


<style lang="scss">
$errorful: rgba(172, 0, 0, 0.845);
$warningful: rgba(191, 94, 9, 0.845);

a {
    color: #42b983;
}

.readout {
    display: block;
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
</style>
