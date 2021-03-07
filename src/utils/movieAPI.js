import axios from 'axios';
                        // https://api.themoviedb.org/3/movie/550
axios.defaults.baseURL = ' https://api.themoviedb.org/3';
const KEY = 'f16135370f37e515a2b59af7c8494d46';
const IMG_SERVER = 'https://image.tmdb.org/t/p/w500';
                   
const fetchMoviesPopularDay = (page = 1) => {
  return axios
    .get(`/trending/movie/day?page=${page}&api_key=${KEY}`)
    .then(responce => {
      return responce.data;
    });
};

const fetchMoviesWithQuery = query => {
  return axios
    .get(`/search/movie?query=${query}&api_key=${KEY}`)
    .then(responce => {
      return responce.data;
    });
};

const fetchMovieDetails = id => {
  return axios.get(`/movie/${id}?api_key=${KEY}`).then(responce => {
    return responce.data;
  });
};

const fetchMovieCredits = id => {
  return axios.get(`/movie/${id}/credits?api_key=${KEY}`).then(responce => {
    return responce.data.cast;
  });
};

const fetchMovieReviews = id => {
  return axios.get(`/movie/${id}/reviews?api_key=${KEY}`).then(responce => {
    return responce.data.results;
  });
};

export default {
  page: 1,
  pages: 2,
  query: '',
  get searchQuery() {
    return this.query;
  },
  set searchQuery(str) {
    this.query = encodeURIComponent(str);
  },
  get totalPages() {
    return this.pages;
  },
  set totalPages(pgs) {
    this.pages = Number(pgs);
  },
  incrementPage() {
    if (this.page === this.pages) {
      return;
    }
    this.page += 1;
  },
  decrementPage() {
    if (this.page === 1) {
      return;
    }
    this.page -= 1;
  },
  resetPage() {
    this.page = 1;
  },
  currentPage() {
    return this.page;
  },
  fetchMoviesPopularDay,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
  IMG_SERVER,
};
