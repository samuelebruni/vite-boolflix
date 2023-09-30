<div class="d-flex justify-content-between align-items-center">
            <div>
                <div>
                    <div>
                        <!--logo-->
                        <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
                            alt="" style="width: 150px;">
                    </div>
                </div>
                <div>
                    <!--menu-->
                </div>
            </div>
            <div class="input-group mb-3  border-0 mywidth d-flex justify-content-end">
                <input type="text" class="form-control d-block" placeholder="Cosa vuoi vedere?"
                    v-model="this.store.queryValue" @keyup.enter="store.fetchMovie">

                <!--al click dell'icona inserita in questo span, si scatenerà l'evento che avvierà la ricerca-->
                <span class="input-group-text" id="basic-addon1" @click="store.fetchMovie">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </span>
            </div>


            ____________________-


            <template>
    <div class="mycontainer">
        <div class="row">
            <div class=" col-xl-2 col-md-3 col-sm-6 col-12" v-for="movie in store.movieList">
                <div class="card">
                    <img :src="store.urlImg + movie.poster_path" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ movie.title }}</h5>
                        <p class="card-text">{{ movie.original_title }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Language: {{ movie.original_language.toUpperCase() }}
                            <img width="100" :alt="movie.original_language"
                                :src="movie.original_language === 'en' ? store.flagEnglishUrl : 'https://flagsapi.com/' + movie.original_language.toUpperCase() + '/shiny/64.png'" />
                        </li>

                        <li class="list-group-item">

                            <div>

                                <span>VOTO: {{ Math.round(movie.vote_average / 2) }}</span>

                                <span v-for="star in Math.round(movie.vote_average / 2)">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>

                                </span>

                                <span v-for="noStar in (5 - Math.round(movie.vote_average / 2))">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-star" viewBox="0 0 16 16">
                                        <path
                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg>

                                </span>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class=" col-xl-2 col-md-3 col-sm-6 col-12" v-for="serie in store.seriesList">
                <div class="card">
                    <img :src="store.urlImg + serie.poster_path" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ serie.name }} CIAO</h5>
                        <p class="card-text">{{ serie.original_name }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Language: {{ serie.original_language.toUpperCase() }}
                            <img width="100" :alt="serie.original_language"
                                :src="serie.original_language === 'en' ? store.flagEnglishUrl : 'https://flagsapi.com/' + serie.original_language.toUpperCase() + '/shiny/64.png'" />
                        </li>
                        <li class="list-group-item">
                            <div>

                                <span>VOTO: {{ Math.round(serie.vote_average / 2) }}</span>

                                <span v-for="star in Math.round(serie.vote_average / 2)">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>

                                </span>

                                <span v-for="noStar in (5 - Math.round(serie.vote_average / 2))">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-star" viewBox="0 0 16 16">
                                        <path
                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg>

                                </span>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>