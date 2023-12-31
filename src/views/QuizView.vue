<script setup lang="ts">
import QuestionDetail from "@/components/QuestionDetail.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import quizes from "@/data/quizes.json";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const quizId = parseInt(route.params.id as string);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswer = ref(0);

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value + 1}/${quiz?.questions.length}`;
});
const barPercentage = computed(() => {
  return `${
    ((currentQuestionIndex.value + 1) / (quiz?.questions.length ?? 0)) * 100
  }%`;
});

const onOptionSelected = (isCorrect: boolean) => {
  if (isCorrect) {
    numberOfCorrectAnswer.value++;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <QuestionDetail
      :question="quiz?.questions[currentQuestionIndex]!"
      @selectOption="onOptionSelected"
    />

    <button
      @click="currentQuestionIndex++"
      v-if="currentQuestionIndex + 1 < (quiz?.questions?.length ?? 0)"
    >
      Next question
    </button>
  </div>
</template>

<style scoped>
div {
  text-align: left;
}

header {
  margin-top: 20px;
}

header h4 {
  font-size: 30px;
}
</style>
