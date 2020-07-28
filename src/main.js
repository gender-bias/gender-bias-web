import Vue from 'vue'
import App from './App.vue'
import "bulma/css/bulma.css";
import { Server } from 'miragejs'

const RESPONSE = {
    'issues': [{
        'flags': [],
        'name': 'Unnecessarily Gendered Words',
        'summary': ''
    }, {
        'flags': [],
        'name': 'Personal Life',
        'summary': ''
    }, {
        'flags': [
            [5, 12, 'Effort vs Accomplishment', "The word 'willing' tends to speak about effort more than accomplishment.",
                'Try replacing with phrasing that emphasizes accomplishment.', -1.0
            ]
        ],
        'name': 'Effort vs Accomplishment',
        'summary': 'This document has too few words about concrete accomplishment.'
    }, {
        'flags': [
            [0, 0, 'Publications', 'This document does not mention many publications.',
                'Try referencing more concrete publications or work byproducts, if possible.', -1.0
            ]
        ],
        'name': 'Publications',
        'summary': ''
    }, {
        'flags': [],
        'name': '\nTerms biased towards women',
        'summary': ''
    }, {
        'flags': [],
        'name': '\nTerms biased towards men:',
        'summary': ''
    }, {
        'flags': [],
        'name': 'Conditional Superlatives',
        'summary': ''
    }],
    'text': 'Some willing text'
};

if (process.env.NODE_ENV === "test") {
    new Server({

        routes() {
            this.timing = 0;
            this.urlPrefix = 'https://api.biascorrect.org';
            this.post("/check", () => {
                return RESPONSE;
            })
        }
    })
}

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
