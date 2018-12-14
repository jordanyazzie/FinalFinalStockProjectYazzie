//ToDo: Import vue and name it Vue**********
import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                // ToDo: Create const call stocks that is equal to data.stocks*********
                const stocks = data.stocks;
                // ToDo: Create const call funds that is equal to data.funds***********
                const funds = data.funds;
                // ToDo: Create const call stockPortfolio that is equal to data.stockPortfolio***********
                const stockPortfolio = data.stockPortfolio;
                //ToDo: Create a const called portfolio that is a data object {}********
                const portfolio = {
                    stockPortfolio,
                    funds
                };
                //ToDo: Inside portfolio add stockPortfolio and funds***********

                //ToDo: using vuex commit method pass 'SET_STOCKS' and stocks**********
                //ToDo: using vuex commit method pass 'SET_PORTFOLIO' and portfolio************
                commit ('SET_STOCKS',stocks);
                commit ('SET_PORTFOLIO', portfolio);
            }
        });
};