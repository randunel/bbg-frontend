<template>
    <form>
        <fieldset>
            <label>Postcode</label>
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
    data() {
        return {
            postcode: ''
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            await this.job.submitInput('postcode', this.postcode);
        }
    }
}
</script>
