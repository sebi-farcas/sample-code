<template>
    <div class="activities">
        List of activities
        <ul class="activities__items">
            <li class="item" v-for="activity in activities" :key="activity.id">
                <div class="item__card">
                    <h3 class="item__title">
                        {{ activity.name }}
                    </h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'List',
    computed: {
        ...mapGetters({
            activities: 'activities/getActivities',
        }),
    },
})
export default class List extends Vue {

}
</script>
