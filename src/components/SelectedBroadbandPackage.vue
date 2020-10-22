<template>
    <form>
        <fieldset>
            <label>Select your broadband package</label>
            <select v-model="selectedBroadbandPackage">
                <option
                    v-for="pkg in availableBroadbandPackages"
                    v-bind:value="pkg"
                    >
                    {{ pkg.name }} @ {{ pkg.plan[0].contents[0].text }} + {{ pkg.plan[0].contents[1].text }}
                </option>
            </select>
            <button @click="submit">submit</button>
        </fieldset>
    </form>
</template>

<script>
import shared from '../shared';

export default {
    name: 'SelectedBroadbandPackage',
    props: [ 'job' ],
    emits: [ 'data' ],
    async setup(props) {
        const [ availableBroadbandPackages ] = await props.job.waitForOutputs('availableBroadbandPackages');
        return {
            availableBroadbandPackages,
            selectedBroadbandPackage: {}
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            this.$emit('data', this.selectedBroadbandPackage);
        }
    }
};
</script>
