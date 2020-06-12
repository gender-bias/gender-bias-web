<template>
    <div>
        <div v-if="!response">
            <textarea v-model="text" cols="80" rows="10"></textarea>
            <button @click="submitText">Submit</button>
        </div>
        <div v-else>
            <table>
                <thead>
                    <tr>
                        <th>Start</th>
                        <th>Stop</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Recommendation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="flag in getFlags" v-bind:key="flag">
                        <td>{{ flag[0] }}</td>
                        <td>{{ flag[1] }}</td>
                        <td>{{ flag[2] }}</td>
                        <td>{{ flag[3] }}</td>
                        <td>{{ flag[4] }}</td>
                    </tr>
                </tbody>
            </table>

            <button @click="returnToEdit">Go Back</button>
        </div>
    </div>
</template>

<script>
/*
issues: [{
    flags: [start, stop, title, description, recommendation],

}]

*/

class GenderBiasAPI {
    constructor(opts) {
        opts = opts || {};
        this.baseURL = opts.baseURL || "http://0.0.0.0:5000";
    }

    check(text) {
        return fetch(this.baseURL + "/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        }).then(res => res.json());

        // return new Promise(resolve => {
        //     return window.setTimeout(() => {
        //         resolve({
        //             issues: [],
        //             text: text
        //         });
        //     }, 5000);
        // });
    }
}

export default {
    data() {
        return {
            text: "",
            response: undefined
        };
    },

    methods: {
        submitText: function() {
            let api = new GenderBiasAPI();
            api.check(this.text).then(apiResponse => {
                this.response = apiResponse;
            });
        },

        returnToEdit: function() {
            this.response = undefined;
        }
    },

    computed: {
        getFlags: function() {
            console.log(this.response);
            let listOfFlags = this.response.issues
                // .filter(issue => issue.flags.length > 0)
                .map(issue => issue.flags);

            let flagsToReturn = [];
            for (let i = 0; i < listOfFlags.length; i++) {
                flagsToReturn.push(listOfFlags[i]);
            }
            console.log(flagsToReturn);
            return flagsToReturn;
        }
    }
};
</script>