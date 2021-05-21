import { ActivitiesState } from '@/types/state/ActivitiesState';
import { GetterTree } from 'vuex';
import { RootState } from '@/types/state/RootState';

export const getActivities = (activitiesState: ActivitiesState) => activitiesState.activities;

export const getters: GetterTree<ActivitiesState, RootState> = {
    getActivities,
};
