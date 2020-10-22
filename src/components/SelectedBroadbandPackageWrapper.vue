<template>
    <Suspense>
    <template #default>
        <SelectedBroadbandPackage
            v-bind:job="job"
            v-on:data="$emit('data', $event)"
            />
    </template>
    <template #fallback>
        <p
            v-bind:class="{ inactive }"
            >
            Retrieving availableBroadbandPackages, please wait
        </p>
    </template>
    </Suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import shared from '../shared';

const SelectedBroadbandPackage = defineAsyncComponent(() => import('./SelectedBroadbandPackage.vue'));

export default {
    name: 'SelectedBroadbandPackageWrapper',
    props: [ 'job', 'inactive' ],
    emits: [ 'data' ],
    components: {
        SelectedBroadbandPackage
    }
}
</script>
