<template>
    <form>
        <fieldset>
            <label>Select your installation date</label>
            <select v-model="selectedInstallationDate">
                <option
                    v-for="date in availableInstallationDates"
                    v-bind:value="date"
                    >
                {{ date }}
                </option>
            </select>
            <button @click="submit">submit</button>
        </fieldset>
    </form>
</template>

<script>
import shared from '../shared';

export default {
    name: 'SelectedInstallationDate',
    props: [ 'job' ],
    emits: [ 'data' ],
    async setup(props) {
        const [ availableInstallationDates ] = await props.job.waitForOutputs('availableInstallationDates');
        return {
            availableInstallationDates,
            selectedInstallationDate: ''
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            this.$emit('data', this.selectedInstallationDate);
        }
    }
};
</script>
