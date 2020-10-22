<template>
    <form>
        <fieldset>
            <label>Enter your landline number (leave blank for none)</label>
            <input v-model="landlineNumber" placeholder="00000000000"/>
            <button @click="submit">submit</button>
        </fieldset>
    </form>
</template>

<script>
import shared from '../shared';

export default {
    name: 'Postcode',
    props: [ 'job' ],
    emits: [ 'data' ],
    data() {
        return {
            landlineNumber: ''
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            this.$emit('data', this.landlineNumber);
        }
    }
}
</script>
