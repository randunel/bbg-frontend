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
    data() {
        return {
            postcode: ''
        };
    },
    methods: {
        async submit() {
            console.log(this.postcode, await shared.getJob({}))
        }
    }
}
</script>
