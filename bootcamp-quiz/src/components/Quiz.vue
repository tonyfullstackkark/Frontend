<template>
  <b-jumbotron>
    <template v-slot:lead>{{question.question}}</template>
    <hr class="my-4" />
    <b-list-group>
      <b-list-group-item
        @click.prevent="indexSelected(index)"
        v-for="(answer, index) in answers"
        :key="index"
        :class="[selectedIndex === index ? 'selected' : '']"
      >{{ answer }}</b-list-group-item>
    </b-list-group>
    <b-button variant="primary" href="#">Send Answer</b-button>
    <b-button @click="next" variant="success" href="#">Next Question</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: {
    question: Object,
    next: Function
  },
  data() {
    return {
      selectedIndex: null
    };
  },
  computed: {
    answers() {
      let answers = [...this.question.incorrect_answers];
      answers.push(this.question.correct_answer);
      return answers;
    }
  },
  methods: {
    indexSelected(index) {
      this.selectedIndex = index;
    }
  }
};
</script>

<style scoped>
.correct {
  background-color: green;
}
.incorrect {
  background-color: red;
}
.selected {
  background-color: blue;
}
</style>