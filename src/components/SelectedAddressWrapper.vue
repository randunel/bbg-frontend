<template>
    <Suspense>
    <template #default>
        <SelectedAddress
            v-bind:job="job"
            v-on:data="$emit('data', $event)"
            />
    </template>
    <template #fallback>
        <p
            v-bind:class="{ inactive }"
            >
            Retrieving availableAddresses, please wait
        </p>
    </template>
    </Suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import shared from '../shared';

const SelectedAddress = defineAsyncComponent(() => import('./SelectedAddress.vue'));

export default {
    name: 'SelectedAddressWrapper',
    props: [ 'job', 'inactive' ],
    emits: [ 'data' ],
    components: {
        SelectedAddress
    }
}
</script>
