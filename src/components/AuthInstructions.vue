<template>
    <ol>
        <li>Make sure SECRET_KEY is in your environment
            <p>
                <code>export SECRET_KEY=abc123</code>
            </p>
        </li>
        <li>Create a job using your <code>$SECRET_KEY</code>
            <p>
                <code>curl 'https://api.automationcloud.net/jobs/'$(eval 'curl https://api.automationcloud.net/jobs -u "$SECRET_KEY:" -H '\''Content-Type: application/json'\'' -d '\''{"category":"test","serviceId":"cbc02fc4-a549-4c1b-ac61-bed9f04654dc","input":{"url":"https://www.vodafone.co.uk/broadband/deals/superfast"}}'\'' -s | jq -r '\''.id'\''')'/end-user' -u "$SECRET_KEY:" -s | jq -r '.jobId,.token'</code>
            </p>
        </li>
        <li>Paste the jobId and token below
            <form>
                <fieldset>
                    <label class="label-auth">Job ID:</label>
                    <input
                        v-model="jobId"
                        v-on:change="onChangeHandler"
                        placeholder="uuid-abcd-1234"
                        />
                </fieldset>
                <fieldset>
                    <label class="label-auth">Token:</label>
                    <input
                        v-model="token"
                        v-on:change="onChangeHandler"
                        placeholder="token"
                        />
                    <button @click="submit">initialise</button>
                </fieldset>
                <p
                    class="message-error"
                    v-if="error"
                    >
                    {{ error }}
                </p>
            </form>
        </li>
    </ol>
</template>

<script>
import shared from '../shared';

export default {
    name: 'AuthInstructions',
    data() {
        const jobId = localStorage.getItem('jobId');
        const token = localStorage.getItem('token');
        return {
            jobId,
            token,
            error: false
        }
    },
    methods: {
        async submit(event) {
            this.error = false;
            event.preventDefault();
            let job;
            const auth = this.token;
            try {
                job = await shared.getJob({
                    auth,
                    id: this.jobId
                });
            } catch(err) {
                console.log('ccc', err, err.details);
                this.error = err?.details?.responseText || err.name;
                return;
            }
            if (['fail', 'success'].includes(job._state)) {
                this.error = 'This job has ended. Please create a new job.';
                this.jobId = '';
                this.token = '';
                return;
            }
            this.$emit('job-initialised', job, auth);
        },
        onChangeHandler() {
            localStorage.setItem('jobId', this.jobId);
            localStorage.setItem('token', this.token);
        }
    }
}
</script>
