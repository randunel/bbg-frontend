<template>
    <div class="img-wrapper">
        <img alt="UBIO logo" src="https://ub.io/images/logo.png"/>
        <img alt="Vodafone logo" src="https://assets.vodafone.co.uk/cs/groups/public/documents/webcontent/img_vodafone__icon.png"/>
    </div>
    <h3
        v-bind:class="{ inactive: job }"
        >
        Server side prerequisites
    </h3>
    <AuthInstructions
        v-on:job-initialised="onJobInitialised"
        v-bind:class="{ inactive: job }"
        />
    <hr v-if="job" class="section-divider">
    <div v-if="job" class="img-wrapper">
        <img alt="Browser image" src="https://cdn.onlinewebfonts.com/svg/img_81535.png"/>
    </div>
    <h3 v-if="job">Frontend</h3>
    <h4 v-if="job">{{ awaitingInputKey }}</h4>
    <Postcode
        v-if="job"
        v-bind:job="job"
        v-bind:class="{ inactive: awaitingInputKey !== 'postcode' }"
        v-on:data="onData($event)"
        />
    <hr v-if="job">
    <SelectedAddressWrapper
        v-if="job"
        v-bind:job="job"
        v-bind:inactive="awaitingInputKey !== 'selectedAddress'"
        v-on:data="onData($event)"
        />
    <hr v-if="job">
    <LandlineNumber
        v-if="job"
        v-bind:job="job"
        v-bind:class="{ inactive: awaitingInputKey !== 'landlineNumber' }"
        v-on:data="onData($event)"
        />
    <hr v-if="job">
    <SelectedBroadbandPackageWrapper
        v-if="job"
        v-bind:job="job"
        v-bind:inactive="awaitingInputKey !== 'selectedBroadbandPackage'"
        v-on:data="onData($event)"
        />
    <hr v-if="job">
</template>

<script>
import AuthInstructions from './components/AuthInstructions.vue'
import Postcode from './components/Postcode.vue'
import SelectedAddressWrapper from './components/SelectedAddressWrapper.vue'
import LandlineNumber from './components/LandlineNumber.vue'
import SelectedBroadbandPackageWrapper from './components/SelectedBroadbandPackageWrapper.vue'

export default {
    name: 'App',
    components: {
        AuthInstructions,
        Postcode,
        SelectedAddressWrapper,
        LandlineNumber,
        SelectedBroadbandPackageWrapper,
    },
    data() {
        return {
            job: null,
            awaitingInputKey: '',
            awaitingInputResolve: null
        };
    },
    methods: {
        onJobInitialised(job) {
            this.job = job;
            for (const inputKey of [
                'postcode',
                'selectedAddress',
                'landlineNumber',
                'selectedBroadbandPackage',
            ]) {
                this.job.onAwaitingInput(inputKey, () => {
                    this.awaitingInputKey = inputKey;
                    return new Promise(resolve => {
                        this.awaitingInputResolve = resolve;
                    });
                });
            }
        },
        onData(data) {
            const resolve = this.awaitingInputResolve;
            this.awaitingInputResolve = null;
            resolve(data);
        }
    }
}
</script>
