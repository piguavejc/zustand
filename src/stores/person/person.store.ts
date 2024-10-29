import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { logger } from "../midelware/logger";
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

const storeApi: StateCreator<PersonStore, [["zustand/devtools", never]]> = (
  set
) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) =>
    set(
      {
        firstName: value,
      },
      false,
      "setFirstName"
    ),
  setLastName: (value: string) =>
    set({ lastName: value }, false, "setLastName"),
});

export const usePersonStore = create<PersonStore>()(
  logger(
    devtools(
      persist(storeApi, {
        name: "person-storage",
        storage: firebaseStorage,
      })
    )
  )
);
