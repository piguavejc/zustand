import { createJSONStorage, type StateStorage } from "zustand/middleware";

const storageApi: StateStorage = {
  getItem: function (name: string): Promise<string | null> {
    return Promise.resolve(storageApi.getItem(name));
  },
  setItem: function (name: string, value: string): void {
    storageApi.setItem(name, value);
  },
  removeItem: function (name: string): unknown | Promise<unknown> {
    return storageApi.removeItem(name);
  },
};

export const CustomSessionStorage = createJSONStorage(() => storageApi);
