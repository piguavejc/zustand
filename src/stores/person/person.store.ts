import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { firebaseStorage } from "../storages/firebase-storage.storage";

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
  devtools(
    persist(storeApi, {
      name: "person-storage",
      storage: firebaseStorage,
    })
  )
);
