<template>
  <div>Home</div>
  <button
    type="button"
    class="btn btn-secondary btn-sm camera-button"
    @click="showAlert"
  >
    Hello world
  </button>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
  <ul id="array-rendering">
    <li v-for="post in posts" :key="post.id">
      {{ post.id }}
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters({
      posts: "auth/posts",
    }),
  },
  mounted() {
    // this.testApi()
    //   .then((res) => console.log(res))
    //   .catch((er) => console.log(er));
    this.testApi();
  },
  components: {
    // HelloWorld,
  },
  methods: {
    ...mapActions({
      testApi: "auth/testApi",
    }),
    showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },
  },
};
</script>
