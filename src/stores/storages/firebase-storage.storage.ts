import { createJSONStorage, type StateStorage } from "zustand/middleware";

const firebaseUrl =
  "https://zustad-storage-default-rtdb.firebaseio.com/zustand";

const storageApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseUrl}/${name}.json`).then((res) => {
        return res.json();
      });
      return JSON.stringify(data);
    } catch (error) {
      throw new Error("Failed to fetch data from firebase");
    }
    return Promise.resolve(storageApi.getItem(name));
  },
  setItem: async function (name: string, value: string): Promise<void> {
    await fetch(`${firebaseUrl}/${name}.json`, {
      method: "PUT",
      body: value,
    }).then((res) => {
      return res.json();
    });
  },
  removeItem: function (name: string): unknown | Promise<unknown> {
    return storageApi.removeItem(name);
  },
};

export const firebaseStorage = createJSONStorage(() => storageApi);
