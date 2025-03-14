export interface Lesson {
    id: string;
    title: string;
    description: string;
    fileUrl: string;
    uploadedBy: string; // "Teacher" or "Student"
    uploadedAt: Date;
  }
  