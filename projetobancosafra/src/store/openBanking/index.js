const state = {
  data: [
    {
      bankName: '',
      cardName: '',
      typeProduct: '',
      rewardsProgram: false,
      identification: '',
      maximumRateInterest: '0',
      minimumRateInterest: '0',
      nameService: '',
      codeService: '',
      minValue: '',
      minCurrency: '',
      maxValue: '',
      maxCurrency: '',
    }
  ]
}

const mutations = {
  setData(state, payload) {
    state.data = payload
  }
}

const getters = {
  getData(state) {
    return state.data
  }
}

const actions = {
  async saveData({ commit }) {
    const ENDPOINT_SAFRA_PERSONAL_CREDIT_CARD = 'https://api.safra.com.br/open-banking/products-services/v1/personal-credit-cards';
    const request = await fetch(ENDPOINT_SAFRA_PERSONAL_CREDIT_CARD);
    const result = await request.json();
    commit('setData', loadDataEndpointToStore(result.data.brand.companies[0].name, result.data.brand.companies[0]));
  }
}

function loadDataEndpointToStore(bankName, dataResponse) {
  const { personalCreditCards } = dataResponse;
  return personalCreditCards.map(res => {
    const serviceAnuidade = res.fees.services.find(data => data.name === 'ANUIDADE_CARTAO_BASICO_INTERNACIONAL')
    const hasServiceAnuidade = serviceAnuidade ?? 'N/A';

    return {
      bankName,
      cardName: res.name,
      typeProduct: res.identification.product.type,
      rewardsProgram: res.rewardsProgram.hasRewardProgram,
      identification: res.rewardsProgram.network,
      maximumRateInterest: res.interest.rates[0].maximumRate,
      minimumRateInterest: res.interest.rates[0].minimumRate,
      nameService: typeof hasServiceAnuidade === "string" ? hasServiceAnuidade : hasServiceAnuidade.name,
      codeService: typeof hasServiceAnuidade === "string" ? hasServiceAnuidade : hasServiceAnuidade.code,
      minValue: typeof hasServiceAnuidade === "string" ? hasServiceAnuidade : hasServiceAnuidade.minimum.value,
      minCurrency: typeof hasServiceAnuidade === "string" ? hasServiceAnuidade : hasServiceAnuidade.minimum.currency,
      maxValue: typeof hasServiceAnuidade === "string" ? hasServiceAnuidade : hasServiceAnuidade.maximum.value,
      maxCurrency: typeof hasServiceAnuidade === "string" ? hasServiceAnuidade : hasServiceAnuidade.maximum.currency,
    }
  })
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
