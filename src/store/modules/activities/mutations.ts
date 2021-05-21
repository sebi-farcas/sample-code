import { MutationTree } from 'vuex';
import { ActivitiesState } from '@/types/state/ActivitiesState';

export const mutations: MutationTree<ActivitiesState> = {
    updateActivities(state: ActivitiesState, activities: any) {
        state.activities = state.activities.concat(activities);
    }
}
