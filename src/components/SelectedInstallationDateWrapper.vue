<template>
    <Suspense>
    <template #default>
        <SelectedInstallationDate
            v-bind:job="job"
            v-bind:class="{ inactive }"
            v-on:data="$emit('data', $event)"
            />
    </template>
    <template #fallback>
        <p
            v-bind:class="{ inactive }"
            >
            Retrieving availableInstallationDates, please wait
        </p>
    </template>
    </Suspense>
</template>

<script>
import SelectedInstallationDate from './SelectedInstallationDate.vue';

export default {
    name: 'SelectedInstallationDateWrapper',
    props: [ 'job', 'inactive' ],
    emits: [ 'data' ],
    components: {
        SelectedInstallationDate
    }
}
</script>
