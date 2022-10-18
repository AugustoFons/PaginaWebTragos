
    

    const { createApp } = Vue

    createApp({
        data() {
            return {
            url1: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
            drinks: []
            }
        },

        methods: {
            fetchData(url1) {
                fetch(url1)
                .then(response => response.json())
                .then( data => { 
                    this.drinks = data.drinks
                    console.log(this.drinks)
                })

            },


        },

            created() {
                this.fetchData(this.url1)
            }

    }).mount('#app')
