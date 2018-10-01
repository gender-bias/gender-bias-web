<template>
    <div class="readout">
        <div v-if="!rendered">
            <textarea
                v-model="inputText"
                class="text-input"
                placeholder="Paste your letter of recommendation here."
            ></textarea>
            <div class="btn-container">
                <button
                    class="btn submit-button"
                    v-on:click="renderIssues"
                >Submit</button>
            </div>
        </div>
        <div v-if="rendered">
            <button
                class="btn"
                v-on:click="() => {rendered = false}"
            >&leftarrow; Again!</button>
            <Blurb v-for="message in messages" :key="message.rnd" :message="message" />
        </div>
    </div>
</template>

<script>
import Blurb from "./Blurb";

const URL = "http://localhost:5000";


export default {
    name: 'Readout',
    components: {
        Blurb,
    },
    data() {
        return {
            text: "",
            inputText: "",
            messages: [],
            rendered: false,
        }
    },
    methods: {
        renderIssues() {
            fetch(`${URL}/check`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "text": this.inputText
                })
            }).then(res => res.json()).then(payload => {
                let flags = [{
                    start: 0, end: 0, category: "", issue: ''
                }];
                let text = payload.text;
                for (const issue of payload.issues) {
                    flags = flags.concat(issue.flags.map(f => {
                        console.log(f);
                        return {
                            start: f[0],
                            end: f[1],
                            category: f[2],
                            issue: f[3],
                            suggestion: f[4],
                            bias: f[5],
                        }
                    }));
                }
                let renderTextArray = text.split("");
                for (const [i, flag] of flags.entries()) {
                    renderTextArray[flag.end] = "[!]||||" + renderTextArray[flag.end];
                    renderTextArray[flag.start] = `[!]||${i}||` + renderTextArray[flag.start];
                }
                let messages = renderTextArray.join("").split("[!]");
                this.messages = messages.map(text => {
                    console.log(text.split("||")[1] ? flags[parseInt(text.split("||")[1])] : false);
                    return {
                        text: text.split("||")[2],
                        rnd: Math.random(),
                        issue: text.split("||")[1] ? flags[parseInt(text.split("||")[1])] : false,
                    }
                });
                this.rendered = true;
            });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

$errorful: rgba(172, 0, 0, 0.845);
$warningful: rgba(191, 94, 9, 0.845);

a {
  color: #42b983;
}

.readout {
    width: 80vw;
    max-width: 64em;
    margin: auto;
    text-align: justify;
    white-space: pre-line;
}

.text-input {
    box-sizing: border-box;
    width: 100%;
    height: 40em;
    max-height: 70vh;
    box-shadow: 0 1em 0.1em 0.1em rgba(0, 0, 0, 0);
    padding: 1em;
    font-size: 12pt;
    border: 1px solid #dedede;
    transition: all 0.5s;
}

.text-input:focus {
    outline: none;
    box-shadow: 0 0.3em 3em 0.5em #dededecc;
}

.btn {
    margin: 0;
    border: none;
    border-radius: 2px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    width: 100%;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: #fff;
    background-color: #2196f3;
    box-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.2);
    outline: none;
    transition: all 0.1s;
    cursor: pointer;
}
.btn:active {
    box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.4);
    background-color: #2166a3;
    outline: none;
}
.btn:hover {
    background-color: #4186ff;
    box-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.4);
    outline: none;
}

.btn-container {
    width: 100%;
    display: block;
}


</style>
