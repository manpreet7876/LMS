import { Lesson } from "../../models/LessonModel";
import { LocalStorageHelper } from "../../../src/utils/localStorageHelper";

const LOCAL_STORAGE_KEY = "lessons";

export const LessonService = {
  getLessons: (): Lesson[] => {
    return LocalStorageHelper.getItem(LOCAL_STORAGE_KEY) || [];
  },

  addLesson: (newLesson: Lesson): void => {
    const lessons = LessonService.getLessons();
    lessons.push(newLesson);
    LocalStorageHelper.setItem(LOCAL_STORAGE_KEY, lessons);
  },

  deleteLesson: (id: string): void => {
    const updatedLessons = LessonService.getLessons().filter(lesson => lesson.id !== id);
    LocalStorageHelper.setItem(LOCAL_STORAGE_KEY, updatedLessons);
  }
};
