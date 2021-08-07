<template>
  <AdminNavbar />
  <AdminSideBar />
  <div class="content-container">
    <div class="container-fluid">
      <!-- Main component for a primary marketing message or call to action -->
      <div>Admin Home</div>
      <button @click="showAlert">Hello world</button>
      <button
        type="button"
        class="btn btn-secondary btn-sm camera-button"
        @click="captureImage"
      >
        <span>Take Picture</span>
      </button>
      <div class="home">
        <div class="jumbotron">
          <h1>Navbar example</h1>
          <p>
            This example is a quick exercise to illustrate how the default,
            static and fixed to top navbar work. It includes the responsive CSS
            and HTML, so it also adapts to your viewport and device.
          </p>
          <p>
            To see the difference between static and fixed top navbars, just
            scroll.
          </p>
          <p>
            <a
              class="btn btn-lg btn-primary"
              href="../../components/#navbar"
              role="button"
              >View navbar docs &raquo;</a
            >
          </p>
        </div>
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      </div>
      <ul id="array-rendering">
        <li v-for="post in posts" :key="post.id">
          {{ post.id }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import AdminNavbar from "../../components/composit/admin/nav-bar.vue";
import AdminSideBar from "../../components/composit/admin/side-bar.vue";

export default {
  name: "AdminHome",
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
    AdminNavbar,
    AdminSideBar,
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
<style scoped>
.sidebar-container {
  position: fixed;
  width: 220px;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #1a1a1a;
  color: #fff;
}

.content-container {
  padding-top: 20px;
}

.sidebar-logo {
  padding: 10px 15px 10px 30px;
  font-size: 20px;
  background-color: #2574a9;
}

.sidebar-navigation {
  padding: 0;
  margin: 0;
  list-style-type: none;
  position: relative;
}

.sidebar-navigation li {
  background-color: transparent;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 20px;
}

.sidebar-navigation li a {
  padding: 10px 15px 10px 30px;
  display: block;
  color: #fff;
}

.sidebar-navigation li .fa {
  margin-right: 10px;
}

.sidebar-navigation li a:active,
.sidebar-navigation li a:hover,
.sidebar-navigation li a:focus {
  text-decoration: none;
  outline: none;
}

.sidebar-navigation li::before {
  background-color: #2574a9;
  position: absolute;
  content: "";
  height: 100%;
  left: 0;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

.sidebar-navigation li:hover::before {
  width: 100%;
}

.sidebar-navigation .header {
  font-size: 12px;
  text-transform: uppercase;
  background-color: #151515;
  padding: 10px 15px 10px 30px;
}

.sidebar-navigation .header::before {
  background-color: transparent;
}

.content-container {
  padding-left: 220px;
}
</style>
