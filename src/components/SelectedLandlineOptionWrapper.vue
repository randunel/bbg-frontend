<template>
    <Suspense>
    <template #default>
        <SelectedLandlineOption
            v-bind:job="job"
            v-bind:class="{ inactive }"
            v-on:data="$emit('data', $event)"
            />
    </template>
    <template #fallback>
        <p
            v-bind:class="{ inactive }"
            >
            Retrieving availableLandlineOptions, please wait
        </p>
    </template>
    </Suspense>
</template>

<script>
import SelectedLandlineOption from './SelectedLandlineOption.vue';

export default {
    name: 'SelectedLandlineOptionWrapper',
    props: [ 'job', 'inactive' ],
    emits: [ 'data' ],
    components: {
        SelectedLandlineOption
    }
}
</script>
