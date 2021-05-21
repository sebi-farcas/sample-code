<template>
    <div id="app">
        <list></list>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from './components/List.vue';
import { Action } from 'vuex-class';

@Component({
    components: {
        List,
    },
})
export default class App extends Vue {
    @Action('activities/fetchActivities') public fetchActivities: any;

    mounted() {
        this.fetchActivities();
    }
}
</script>
