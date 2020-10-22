<template>
    <form>
        <fieldset>
            <label>Select your landline addon (or none)</label>
            <select v-model="selectedLandlineExtra">
                <option value=''>None</option>
                <option
                    v-for="extra in availableLandlineExtras"
                    v-bind:value="extra"
                    >
                    {{ extra.name }} {{ extra.priceLine }}
                </option>
            </select>
            <button @click="submit">submit</button>
        </fieldset>
    </form>
</template>

<script>
import shared from '../shared';

export default {
    name: 'SelectedLandlineExtras',
    props: [ 'job' ],
    emits: [ 'data' ],
    async setup(props) {
        const [ availableLandlineExtras ] = await props.job.waitForOutputs('availableLandlineExtras');
        return {
            availableLandlineExtras,
            selectedLandlineExtra: {}
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            const selectedLandlineExtras = [];
            if (this.selectedLandlineExtra) {
                selectedLandlineExtras.push(this.selectedLandlineExtra);
            }
            this.$emit('data', selectedLandlineExtras);
        }
    }
};
</script>
