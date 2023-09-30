<script>
import { store } from '../store'

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div class="mycontainer">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <div>
                    <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
                        alt="" style="width: 150px; height:;">
                </div>
                <div>
                    <ul class="list-unstyled d-flex gap-3 pt-3">
                        <li>Home</li>
                        <li>Serie Tv</li>
                        <li>Film</li>
                        <li>Preferiti</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex gap-2 align-items-center">
                <div class="d-flex gap-2">
                    <input type="text" class="bg-black border-1 border-white text-white rounded-2 p-1"
                        placeholder="Che guardiamo oggi.." v-model="this.store.queryValue" @keyup.enter="store.fetchMovie">
                    <span class="input-group-text bg-black border-0" id="addon-wrapping" @click="store.fetchMovie">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""
                        style="width: 30px; height: 30px;">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.mycontainer {
    width: 90%;
    margin: auto;
}

.mywidth {
    width: 5%;
}

svg {
    fill: white;
}
</style>