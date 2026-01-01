import { create } from 'zustand';

interface CardState {
  activeCardIndex: number;
  setActiveCardIndex: (index: number) => void;
}

export const useCardStore = create<CardState>((set) => ({
  activeCardIndex: 0,
  setActiveCardIndex: (index) => set({ activeCardIndex: index }),
}));