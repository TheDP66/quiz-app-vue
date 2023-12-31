<template>
  <header>
    <h4>Question {{ props.questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="{ width: props.barPercentage }"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  questionStatus: string;
  barPercentage: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.bar {
  width: 300px;
  height: 50px;
  border: 3px solid bisque;
}

.completion {
  height: 100%;
  width: 0%;
  background-color: bisque;
}
</style>
