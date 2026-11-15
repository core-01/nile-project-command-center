export type TaskStatus = "Not Started" | "Ready" | "In Progress" | "Blocked" | "In Review" | "Completed" | "Deferred";
export type Priority = "Critical" | "High" | "Medium" | "Low";
export type Task = {
  id: string; title: string; description: string; phaseId: string; module: string;
  category: string; priority: Priority; status: TaskStatus; estimate: number; actual: number;
  dependencies: string[]; acceptance: string[]; notes: string; createdAt: string; updatedAt: string;
  completedAt?: string; githubUrl?: string;
};
export type Phase = { id: string; name: string; objective: string; deliverable: string; taskIds: string[] };
export type JournalEntry = { id: string; date: string; workedOn: string; completed: string; issues: string; decisions: string; lessons: string; next: string };
export type Decision = { id: string; title: string; context: string; options: string; chosen: string; reason: string; consequences: string; status: string; date: string };
export type Risk = { id: string; description: string; category: string; impact: string; probability: string; mitigation: string; owner: string; status: string };
export type ProjectState = {
  schemaVersion: number; project: { name: string; description: string; status: string; currentPhase: string; developer: string; theme: string };
  tasks: Task[]; phases: Phase[]; journal: JournalEntry[]; decisions: Decision[]; risks: Risk[];
  updatedAt: string;
};