var app = new Vue({
    el:'#root',
    data: {
        search:'',
        list: [],
        personalApi: 'e76246e0c4731c413ba03a3bc5965d13',
    },
    methods: {
        //ricerca film
        src(){
            this.list = [];
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params : {
                    api_key: this.personalApi,
                    query: this.search,
                }
            })
            .then((res) =>{
                this.list = this.list.concat(res.data.results);
            })

            //ricerca serie tv
            axios.get('https://api.themoviedb.org/3/search/tv',{
                params : {
                    api_key: this.personalApi,
                    query: this.search,
                }
            })
            .then((res) =>{
                 this.list = this.list.concat(res.data.results);
            
                })

        },

        getFlagSrc: function(flag) {
           return "https://www.unknown.nu/flags/images/"+ flag + "-100";
        },
    }

})










