import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { CustomSessionStorage } from "../storages/session-storage.storage";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

type PersonStore = PersonState & Actions;

const storeApi: StateCreator<PersonStore> = (set) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) => set({ firstName: value }),
  setLastName: (value: string) => set({ lastName: value }),
});

export const usePersonStore = create<PersonStore>()(
  persist(storeApi, {
    name: "person-storage",
    storage: CustomSessionStorage,
  })
);