import Vue from 'vue';
import Vuex from 'vuex';

import UserModule from './user'
import OpenBankingModule from './openBanking'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserModule,
    OpenBanking: OpenBankingModule
  },
});
