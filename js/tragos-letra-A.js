
    

    const { createApp } = Vue

    createApp({
        data() {
            return {
            urlA :'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
            drinks: []
            }

        },

        methods: {



            fetchData(urlA) {
                fetch(urlA)
                .then(response => response.json())
                .then( data => { 
                    this.drinks = data.drinks
                    console.log(this.drinks)
                })

            },


        },

            created() {
                this.fetchData(this.urlA)
            }

    }).mount('#app')
