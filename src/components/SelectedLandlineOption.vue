<template>
    <form>
        <fieldset>
            <label>Select your landline option</label>
            <select v-model="selectedLandlineOption">
                <option
                    v-for="landlineOption in availableLandlineOptions"
                    v-bind:value="landlineOption"
                    >
                {{ landlineOption }}
                </option>
            </select>
            <button @click="submit">submit</button>
        </fieldset>
    </form>
</template>

<script>
import shared from '../shared';

export default {
    name: 'SelectedLandlineOption',
    props: [ 'job' ],
    emits: [ 'data' ],
    async setup(props) {
        const [ availableLandlineOptions ] = await props.job.waitForOutputs('availableLandlineOptions');
        return {
            availableLandlineOptions,
            selectedLandlineOption: ''
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            this.$emit('data', this.selectedLandlineOption);
        }
    }
};
</script>
