export interface Project {
    title: string;
    summary: string;
    stack: readonly string[];
    liveUrl?: string;
    repoUrl?: string;
  }