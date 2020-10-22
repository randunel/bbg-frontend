<template>
    <form>
        <fieldset>
            <label>Select your residential status</label>
            <select v-model="residentialStatus">
                <option value="own">Owner</option>
                <option value="family">Living with family</option>
                <option value="rent">Tenant</option>
            </select>
            <button @click="submit">submit</button>
        </fieldset>
    </form>
</template>

<script>
import shared from '../shared';

export default {
    name: 'ResidentialStatus',
    props: [ 'job' ],
    emits: [ 'data' ],
    data() {
        return {
            postcode: ''
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            this.$emit('data', this.residentialStatus);
        }
    }
}
</script>
