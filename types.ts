
import { ElementType } from 'react';

export type ViewState = 'works' | 'about' | 'practice' | 'competition' | 'project-detail' | 'base-solution' | 'ai-exploration' | 'visual-creative' | 'insights-media';

export interface WorkItem {
  id: number;
  title: string;
  icon: string | ElementType;
  bgColor: string;
}
