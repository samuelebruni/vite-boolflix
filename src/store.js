import { reactive } from 'vue';
import axios from '../node_modules/axios';


export const store = reactive({
    movieUrl: 'https://api.themoviedb.org/3/search/movie?api_key=d2e343f40db5cc47c894e35c633ad6b7',
    tvSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=d2e343f40db5cc47c894e35c633ad6b7',
    movieList: null,
    seriesList: null,
    queryValue: '',

    fetchMovie() {
        axios
            .get(this.movieUrl + `&query=${this.queryValue}`)
            .then(response => {
                this.movieList = response.data.results;
                this.queryValue = ' '
            })
            .catch(error => {
                console.error(error);
            });
        axios
            .get(this.tvSeriesUrl + `&query=${this.queryValue}`)
            .then(response => {
                this.seriesList = response.data.results;
                this.queryValue = ' '
            })
            .catch(error => {
                console.error(error);
            });
    },
})