<template>
    <form>
        <h4>Billing address</h4>
        <fieldset>
            <label>postcode</label>
            <input v-model="postcode"/>
        </fieldset>
        <fieldset>
            <label>Street name</label>
            <input v-model="streetName"/>
        </fieldset>
        <fieldset>
            <label>Street number</label>
            <input v-model="streetNumber"/>
        </fieldset>
        <fieldset>
            <label>Line 2</label>
            <input v-model="line2"/>
        </fieldset>
        <fieldset>
            <label>City</label>
            <input v-model="city"/>
        </fieldset>
        <fieldset>
            <label>County</label>
            <input v-model="county"/>
        </fieldset>
        <button @click="submit">submit</button>
    </form>
</template>

<script>
import shared from '../shared';

export default {
    name: 'Account',
    props: [
        'job',
        'postcode',
        'streetName',
        'streetNumber',
        'line2',
        'city',
        'county'
    ],
    emits: [ 'data' ],
    data() {
        return {
            billingAddress: {}
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            const billingAddress = {
                postcode: this.postcode,
                streetName: this.streetName,
                streetNumber: this.streetNumber,
                line2: this.line2,
                city: this.city,
                countrySubdivision: this.county,
                countryCode: 'gb'
            };
            this.$emit('data', billingAddress);
        }
    }
}
</script>
