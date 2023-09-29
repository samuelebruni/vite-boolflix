<script>
import { store } from './store'

export default {
  data() {
    return {
      store
    }
  },
  methods() {
    store.fetchMovie();
  }
}
</script>

<template>
  <div class="container">
    <h1 class="text-center text-danger fw-bold">BOOLFLIX</h1>
  </div>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="input-group mb-3 w-25 border-0">
        <input type="text" class="form-control" placeholder="Cosa vuoi vedere?" v-model="this.store.queryValue"
          @keyup.enter="store.fetchMovie">
        <span class="input-group-text" id="basic-addon1" @click="store.fetchMovie"><svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class=" col-xl-2 col-md-3 col-sm-6 col-12" v-for="movie in store.movieList">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.original_title }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Language: {{ movie.original_language }}
              <img width="100" :alt="movie.original_language"
                :src="movie.original_language === 'en' ? store.flagEnglishUrl : 'https://flagsapi.com/' + movie.original_language.toUpperCase() + '/shiny/64.png'" />
            </li>

            <li class="list-group-item">Vote: {{ movie.vote_average }}</li>
          </ul>
        </div>
      </div>

      <div class=" col-xl-2 col-md-3 col-sm-6 col-12" v-for="serie in store.seriesList">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ serie.name }} CIAO</h5>
            <p class="card-text">{{ serie.original_name }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Language: {{ serie.original_language }}
              <img width="100" :alt="serie.original_language"
                :src="serie.original_language === 'en' ? store.flagEnglishUrl : 'https://flagsapi.com/' + serie.original_language.toUpperCase() + '/shiny/64.png'" />
            </li>
            <li class="list-group-item">Vote: {{ serie.vote_average }}</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped></style>
