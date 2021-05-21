import { Module } from 'vuex';
import actions from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { ActivitiesState } from '@/types/state/ActivitiesState';
import { RootState } from '@/types/state/RootState';

const state = {
    activities: []
};

const module: Module<ActivitiesState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default module;
