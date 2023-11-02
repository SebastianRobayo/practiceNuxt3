<template>
  <div>
    <h1>Cursos</h1>
    <CourseList :courses="store.courses" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import CourseList from "../components/CourseList.vue";
import { useCoursesStore } from "../store/courses";

const store = useCoursesStore();

onMounted(() => {
  store.fetchCourses();
});
</script>
