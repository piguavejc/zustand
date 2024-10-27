import { create } from "zustand";

interface BearerState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  bears: { id: number; name: string }[];

  computed: {
    totalBears: number;
  };

  increasePandaBears: (by: number) => void;
  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearerStore = create<BearerState>((set, get) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,
  bears: [{ id: 1, name: "oso #1" }],

  computed: {
    get totalBears(): number {
      return get().blackBears + get().polarBears + get().pandaBears;
    },
  },

  increasePandaBears: (by: number) => {
    set((state) => ({ pandaBears: state.pandaBears + by }));
  },

  increasePolarBears(by: number) {
    set((state) => ({ polarBears: state.polarBears + by }));
  },

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),

  addBear: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        { id: state.bears.length + 1, name: `ose # ${state.bears.length + 1}` },
      ],
    })),

  clearBears: () => set({ bears: [] }),
}));
