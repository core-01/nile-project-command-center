import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProjectState, Task, JournalEntry, Decision, Risk } from "./types";
import { seedData } from "./data/seed";

type Store = ProjectState & {
  updateTask: (id: string, patch: Partial<Task>) => void;
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  addJournal: (entry: JournalEntry) => void;
  updateJournal: (id: string, patch: Partial<JournalEntry>) => void;
  deleteJournal: (id: string) => void;
  addDecision: (item: Decision) => void;
  updateDecision: (id: string, patch: Partial<Decision>) => void;
  addRisk: (item: Risk) => void;
  updateRisk: (id: string, patch: Partial<Risk>) => void;
  updateProject: (patch: Partial<ProjectState["project"]>) => void;
  importState: (data: ProjectState) => void;
  reset: () => void;
};
const stamp = () => new Date().toISOString();
export const useStore = create<Store>()(persist((set) => ({
  ...seedData,
  updateTask: (id, patch) => set(s => ({ tasks:s.tasks.map(t=>t.id===id?{...t,...patch,updatedAt:stamp(),...(patch.status==="Completed"?{completedAt:stamp()}:{})}:t), updatedAt:stamp() })),
  addTask: task => set(s=>({tasks:[task,...s.tasks],updatedAt:stamp()})),
  deleteTask: id => set(s=>({tasks:s.tasks.filter(t=>t.id!==id),updatedAt:stamp()})),
  addJournal: entry => set(s=>({journal:[entry,...s.journal],updatedAt:stamp()})),
  updateJournal: (id,patch) => set(s=>({journal:s.journal.map(j=>j.id===id?{...j,...patch}:j),updatedAt:stamp()})),
  deleteJournal: id => set(s=>({journal:s.journal.filter(j=>j.id!==id),updatedAt:stamp()})),
  addDecision: item => set(s=>({decisions:[item,...s.decisions],updatedAt:stamp()})),
  updateDecision: (id,patch) => set(s=>({decisions:s.decisions.map(d=>d.id===id?{...d,...patch}:d),updatedAt:stamp()})),
  addRisk: item => set(s=>({risks:[item,...s.risks],updatedAt:stamp()})),
  updateRisk: (id,patch) => set(s=>({risks:s.risks.map(r=>r.id===id?{...r,...patch}:r),updatedAt:stamp()})),
  updateProject: patch => set(s=>({project:{...s.project,...patch},updatedAt:stamp()})),
  importState: data => set({...data,updatedAt:stamp()}),
  reset: () => set({...seedData,updatedAt:stamp()})
}), {name:"nile-command-center-v1", version:1, partialize: s => ({
  schemaVersion:s.schemaVersion,project:s.project,phases:s.phases,tasks:s.tasks,journal:s.journal,
  decisions:s.decisions,risks:s.risks,updatedAt:s.updatedAt
})}));