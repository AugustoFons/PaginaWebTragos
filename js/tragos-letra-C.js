const { createApp } = Vue

createApp({
    data() {
        return {
        urlC: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c',
        drinks: []
        }
    },

    methods: {
        fetchData(urlC) {
            fetch(urlC)
            .then(response => response.json())
            .then( data => { 
                this.drinks = data.drinks
                console.log(this.drinks)
            })

        },


    },

        created() {
            this.fetchData(this.urlC)
        }

}).mount('#app')