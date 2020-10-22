<template>
    <form>
        <fieldset>
            <label>Select your address</label>
            <select v-model="selectedAddress">
                <option
                    v-for="address in availableAddresses"
                    v-bind:value="address"
                    >
                {{ address }}
                </option>
            </select>
            <button @click="submit">submit</button>
        </fieldset>
    </form>
</template>

<script>
import shared from '../shared';

export default {
    name: 'SelectedAddress',
    props: [ 'job', 'inactive' ],
    emits: [ 'data' ],
    async setup(props) {
        const [ availableAddresses ] = await props.job.waitForOutputs('availableAddresses');
        return {
            availableAddresses,
            selectedAddress: ''
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            this.$emit('data', this.selectedAddress);
        }
    }
};
</script>
