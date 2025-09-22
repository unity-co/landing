import axios from "axios";
import { AddRecordResponseSchema, StatsResponseSchema } from "./schema";

export class PetitionAPI {
  constructor(private baseUrl: string) {}

  private async getFingerprint(): Promise<string> {
    const FingerprintJS = (await import("@fingerprintjs/fingerprintjs")).default;
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    return result.visitorId;
  }

  async addRecord(record: { name: string; country: string; city: string }) {
      const fingerprint = await this.getFingerprint();

      const res = await fetch(this.baseUrl, {
        method: "POST",
        redirect: "follow",
        body: JSON.stringify({
          action: "addRecord",
          ...record,
          fingerprint,
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      const data = await res.json();
      const parsed = AddRecordResponseSchema.parse(data);
      return parsed;
    }

    async getStats() {
      const res = await fetch(`${this.baseUrl}?action=stats`);
      const data = await res.json();

      // Приводим все значения в countries к числам
      if (data.countries) {
        for (const key in data.countries) {
          data.countries[key] = Number(data.countries[key]);
        }
      }

      const parsed = StatsResponseSchema.parse(data);
      return parsed;
    }
}
