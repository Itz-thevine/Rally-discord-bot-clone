import { createStore } from "vuex";

export default createStore({
    state:{
        coin_id:"01coin",
    },
    mutations: {
        UPDATE_COIN (state, payload){
            state.coin_id = payload
        }
    },
    actions:{
        toggleCoin(context, payload){
            const dCoin = context.state.coin_id;
            dCoin = payload
            context.commit("UPDATE_COIN", dCoin);
        }
    },
    getters:{
        get_Coin: function(state) {
            return state.coin_id;
        }
    }
})