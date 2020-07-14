import Vue from 'vue'
import App from './App.vue'
import "bulma/css/bulma.css";
import { Server } from 'miragejs'

//Some text
// const RESPONSE_1 = {
//     'issues': [{ 'flags': [], 'name': 'Unnecessarily Gendered Words', 'summary': '' }, { 'flags': [], 'name': 'Personal Life', 'summary': '' }, { 'flags': [], 'name': 'Effort vs Accomplishment', 'summary': 'This document has too few words about concrete accomplishment.' }, {
//         'flags': [
//             [0, 0, 'Publications', 'This document does not mention many publications.', 'Try referencing more concrete publications or work byproducts, if possible.', -1.0]
//         ],
//         'name': 'Publications',
//         'summary': ''
//     }, { 'flags': [], 'name': '\nTerms biased towards women', 'summary': '' }, { 'flags': [], 'name': '\nTerms biased towards men:', 'summary': '' }, { 'flags': [], 'name': 'Conditional Superlatives', 'summary': '' }],
//     'text': 'Some text'
// };

//Some willing text
const RESPONSE_2 = {
    'issues': [{ 'flags': [], 'name': 'Unnecessarily Gendered Words', 'summary': '' }, { 'flags': [], 'name': 'Personal Life', 'summary': '' }, {
        'flags': [
            [5, 12, 'Effort vs Accomplishment', "The word 'willing' tends to speak about effort more than accomplishment.", 'Try replacing with phrasing that emphasizes accomplishment.', -1.0]
        ],
        'name': 'Effort vs Accomplishment',
        'summary': 'This document has too few words about concrete accomplishment.'
    }, {
        'flags': [
            [0, 0, 'Publications', 'This document does not mention many publications.', 'Try referencing more concrete publications or work byproducts, if possible.', -1.0]
        ],
        'name': 'Publications',
        'summary': ''
    }, { 'flags': [], 'name': '\nTerms biased towards women', 'summary': '' }, { 'flags': [], 'name': '\nTerms biased towards men:', 'summary': '' }, { 'flags': [], 'name': 'Conditional Superlatives', 'summary': '' }],
    'text': 'Some willing text'
};

//need to enable/disable for production 
//and testing frontend by itself and with backend
new Server({

    routes() {
        //should run by default with timing 0 when testing
        this.timing = 0;
        this.urlPrefix = 'http://localhost:5000';
        this.post("/check", () => {
            return RESPONSE_2;
        })
    }
})


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')