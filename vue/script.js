var app = new Vue({
    
    el:"#root",

    data:{
        listMovie:[],
        listSeries:[],
        srcMovie:'',
    },

    methods: {
        search() {
            const self= this
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=e76246e0c4731c413ba03a3bc5965d13&&include_adult=false&query=' + this.srcMovie)
            
            .then((result) => {
                this.listMovie = result.data.results;
                this.listMovie.forEach(element => {
                    element.vote_average = Math.floor(parseInt(element.vote_average)/2);
                });
            })

            axios.get('https://api.themoviedb.org/3/search/movie?api_key=e76246e0c4731c413ba03a3bc5965d13&&include_adult=false&query=' + this.srcMovie)
            
            .then((result) => {
                this.listSeries = result.data.results;
                this.listSeries.forEach(element => {
                    element.vote_average = Math.floor(parseInt(element.vote_average)/2);
                });
            })
        }
    },

     
    
    
        





    
})