<template>
  <div id="app">
    <Nav />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <Quiz :question="questions[index]" :next="next" v-if="questions.length" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Quiz from "./components/Quiz.vue";

export default {
  name: "App",
  components: {
    Nav,
    Quiz
  },
  data() {
    return {
      questions: [],
      index: 0
    };
  },
  methods: {
    next() {
      this.index++;
    }
  },
  mounted: function() {
    fetch("https://opentdb.com/api.php?amount=10&category=17&type=multiple", {
      method: "get"
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.questions = data.results;
      });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
