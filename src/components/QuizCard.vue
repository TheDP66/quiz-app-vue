<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import { useRouter } from "vue-router";

interface Props {
  quiz: {
    id: number;
    img: string;
    name: string;
    questions: {
      id: number;
      text: string;
      options: {
        id: number;
        label: string;
        text: string;
        isCorrect: boolean;
      }[];
    }[];
  };
}

const props = defineProps<Props>();
const { quiz } = toRefs(props);
const router = useRouter();
</script>

<template>
  <div class="card" @click="router.push('/quiz/' + quiz.id)">
    <img :src="quiz.img" alt="Math" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  text-align: start;
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin: 0 20px 35px 0;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>
