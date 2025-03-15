import { Lesson } from "../../../src/models/LessonModel";

const LOCAL_STORAGE_KEY = "lessons";

export const LessonService = {
  getLessons: (): Lesson[] => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  addLesson: (newLesson: Lesson): void => {
    const lessons = LessonService.getLessons();
    lessons.push(newLesson);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lessons));
  },

  deleteLesson: (id: string): void => {
    const updatedLessons = LessonService.getLessons().filter(lesson => lesson.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLessons));
  }
};
