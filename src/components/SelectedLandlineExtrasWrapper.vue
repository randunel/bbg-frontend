<template>
    <Suspense>
    <template #default>
        <SelectedLandlineExtras
            v-bind:job="job"
            v-bind:class="{ inactive }"
            v-on:data="$emit('data', $event)"
            />
    </template>
    <template #fallback>
        <p
            v-bind:class="{ inactive }"
            >
            Retrieving availableLandlineExtras, please wait
        </p>
    </template>
    </Suspense>
</template>

<script>
import SelectedLandlineExtras from './SelectedLandlineExtras.vue';

export default {
    name: 'SelectedLandlineExtrasWrapper',
    props: [ 'job', 'inactive' ],
    emits: [ 'data' ],
    components: {
        SelectedLandlineExtras
    }
}
</script>
