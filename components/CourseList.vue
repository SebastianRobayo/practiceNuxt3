<template>
  <div>
    <ul v-if="props.courses && props.courses.length">
      <li v-for="course in props.courses" :key="course.id">
        {{ (course as Course).name }}
      </li>
    </ul>
    <p v-else>Cargando cursos...</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Course {
  id: number;
  name: string;
}

const props = defineProps({
  courses: Array as () => Course[],
});
</script>
