import Vue from 'vue'
import App from './App.vue'
import "bulma/css/bulma.css";
import { Server } from 'miragejs'

const RESPONSE1 = {
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

const RESPONSE2 = {
    'issues': [{
        'flags': [
            [0, 5, 'Beginning', 'Flags should work at the beginning of the text',
                'See if this flag works', -1.0
            ],
            [18, 22, 'Middle', 'Flags should work in the middle of the text',
                'See if this flag works', -1.0
            ],
            [50, 53, 'End', 'Flags should work at the end of the text',
                'See if this flag works', -1.0
            ]
        ],
        'name': 'Flag position test',
        'summary': 'Flags should work correctly regardles of where they appear in the text.'
    }],
    'text': 'Start. There is a flag in the middle of the text. End.'
};

const RESPONSE3 = {
    'issues': [{
        'flags': [
            [7, 14, 'Beginning', 'Flags should work at the beginning of the text',
                'See if this flag works', -1.0
            ],
            [21, 28, 'Middle', 'Flags should work in the middle of the text',
                'See if this flag works', -1.0
            ],
            [37, 44, 'End', 'Flags should work at the end of the text',
                'See if this flag works', -1.0
            ]
        ],
        'name': 'Flag position test',
        'summary': 'Flags should work correctly regardles of where they appear in the text.'
    }],
    'text': 'She is willing. I am willing. She is willing.'
};

if (process.env.NODE_ENV === "test") {
    new Server({

        routes() {
            this.timing = 0;
            this.urlPrefix = 'https://api.biascorrect.org';
            this.post("/check", (schema, request) => {
                let text = JSON.parse(request.requestBody).text;
                if (text.includes('willing')) {
                    return RESPONSE1;
                } else if (text.includes('She')) {
                    return RESPONSE3;
                } else {
                    return RESPONSE2;
                }
            })
        }
    })
}

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')