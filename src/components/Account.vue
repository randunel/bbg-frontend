<template>
    <form>
        <h4>Account details</h4>
        <fieldset>
            <label>Email</label>
            <input v-model="email" placeholder="someone@example.com"/>
        </fieldset>
        <fieldset>
            <label>Title</label>
            <select v-model="title">
                <option value="mr">Mr</option>
                <option value="ms">Ms</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
            </select>
        </fieldset>
        <fieldset>
            <label>First name</label>
            <input v-model="firstName"/>
        </fieldset>
        <fieldset>
            <label>Last name</label>
            <input v-model="lastName"/>
        </fieldset>
        <fieldset>
            <label>Phone</label>
            <input v-model="phone"/>
        </fieldset>
        <fieldset>
            <label>Date of birth (YYYY-MM-DD)</label>
            <input v-model="dateOfBirth"/>
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
        'email',
        'title',
        'firstName',
        'lastName',
        'dateOfBirth',
        'phone'
    ],
    emits: [ 'data' ],
    data() {
        return {
            account: {}
        };
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            const account = {
                email: this.email,
                person: {
                    title: this.title,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    dateOfBirth: this.dateOfBirth
                },
                phone: {
                    countryCode: 'gb',
                    number: this.phone
                }
            };
            this.$emit('data', account);
        }
    }
}
</script>
