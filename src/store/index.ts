import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/types/state/RootState';
import activities from '@/store/modules/activities';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        activities
    }
}

export default new Vuex.Store<RootState>(store);
