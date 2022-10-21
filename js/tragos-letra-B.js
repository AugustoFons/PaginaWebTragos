const { createApp } = Vue

createApp({
    data() {
        return {
        urlB: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b',
        drinks: []
        }
    },

    methods: {
        fetchData(urlB) {
            fetch(urlB)
            .then(response => response.json())
            .then( data => { 
                this.drinks = data.drinks
                console.log(this.drinks)
            })

        },


    },

        created() {
            this.fetchData(this.urlB)
        }

}).mount('#app')
