<template>
  <b-jumbotron>
    <template v-slot:lead>{{question.question}}</template>
    <hr class="my-4" />
    <p>Answers</p>
    <b-button variant="primary" href="#">Send Answer</b-button>
    <b-button @click="next" variant="success" href="#">Next Question</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: {
    question: Object,
    next: Function
  }
};
</script>