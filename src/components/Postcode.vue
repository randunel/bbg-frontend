<template>
    <form>
        <fieldset>
            <label>Enter your postcode</label>
            <input v-model="postcode" placeholder="CB4 3DN"/>
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
            postcode: ''
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            this.$emit('data', this.postcode);
        }
    }
}
</script>
