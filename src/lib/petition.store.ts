import { writable } from "svelte/store";
import { PetitionAPI } from "./wrapper";


export type Signatures = {
  count: number | null;
  data: Record<string, number>;
};

const api = new PetitionAPI('https://script.google.com/macros/s/AKfycbz3ipLsdHpXVuKmEz5wldhNciDDI982xa-UjhoTCJhQwqYrR9g-YnfF4FdwwqudNzNoCw/exec');

function createSignaturesStore() {
  const { subscribe, set } = writable<Signatures>({ count: null, data: {} });

  return {
    subscribe,

    async load() {
      try {
        const stats = await api.getStats();
        set({ count: stats.total, data: stats.countries });
      } catch (err) {
        console.error("Failed to load stats", err);
      }
    },

    async addRecord(record: { name: string; country: string; city: string }) {
      if (typeof window === "undefined") {
        throw new Error("Cannot generate fingerprint on server");
      }

      // динамически импортируем FingerprintJS только на клиенте
      const FingerprintJS = (await import("@fingerprintjs/fingerprintjs")).default;
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      const fingerprint = result.visitorId;

      const res = await api.addRecord({ ...record, fingerprint });

      if (res.status === "ok") {
        await this.load(); // обновляем статистику
      }

      return res;
    },
  };
}

export const signatures = createSignaturesStore();
