<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue';
import AppItem from './components/AppItem.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppItem
  },
  data() {
    return {
      store,
    }
  },

  methods() {
    store.fetchMovie();
  }
}
</script>

<template>
  <AppHeader />

  <AppItem />
</template>


