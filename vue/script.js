var app = new Vue({
    
    el:"#root",

    data:{
        listMovie:[],
        srcMovie:'',
    },

    methods: {
        search() {
            const self= this
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=e76246e0c4731c413ba03a3bc5965d13&language=it-IT&include_adult=true&query=' + this.srcMovie)
            .then((result) => {
                
                this.listMovie = result.data.results;
                
            })
        }
    }
    
        





    
})