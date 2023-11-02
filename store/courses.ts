import { defineStore } from "pinia";

interface Course {
  id: number;
  name: string;
}

export const useCoursesStore = defineStore({
  id: "courses",
  state: (): { courses: Course[] } => ({
    courses: [],
  }),
  actions: {
    fetchCourses() {
      this.courses = [
        { id: 1, name: "Fundamentos de programación" },
        { id: 2, name: "Matematicas" },
        { id: 3, name: "Ingles" },
      ];
    },
  },
});
