<script setup lang="ts">
import { ref, watch } from "vue";
import QuizCard from "../components/QuizCard.vue";
import q from "../data/quizes.json";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <header>
    <h1>Quizes</h1>
    <input v-model.trim="search" type="text" placeholder="Search..." />
  </header>

  <div class="options-container">
    <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
  </div>
</template>

<style scoped>
header {
  margin: 30px 0 10px 0;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>
