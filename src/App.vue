<template>
    <div class="img-wrapper">
        <img alt="UBIO logo" src="https://ub.io/images/logo.png"/>
        <img alt="Vodafone logo" src="https://assets.vodafone.co.uk/cs/groups/public/documents/webcontent/img_vodafone__icon.png"/>
    </div>
    <h3>Server side prerequisites</h3>
    <AuthInstructions v-on:job-initialised="onJobInitialised"/>
    <hr v-if="jobId" class="section-divider">
    <div v-if="jobId" class="img-wrapper">
        <img alt="Browser image" src="https://cdn.onlinewebfonts.com/svg/img_81535.png"/>
    </div>
    <h3 v-if="jobId">Frontend</h3>
    <Postcode v-if="jobId"/>
    <hr v-if="jobId">
</template>

<script>
import AuthInstructions from './components/AuthInstructions.vue'
import Postcode from './components/Postcode.vue'

export default {
    name: 'App',
    components: {
        Postcode,
        AuthInstructions
    },
    data() {
        return {
            jobId: '',
            auth: ''
        };
    },
    methods: {
        onJobInitialised(job, auth) {
            this.jobId = job._jobId;
            this.auth = auth;
        }
    }
}
</script>
