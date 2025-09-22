import { z } from "zod";

export const RecordSchema = z.object({
  name: z.string(),
  country: z.string(),
  city: z.string(),
  fingerprint: z.string(),
});

export const AddRecordResponseSchema = z.object({
  status: z.enum(["ok", "err"]),
  message: z.string().optional(),
  record: RecordSchema.optional(),
});

export const CountryStatsSchema = z.record(z.string(), z.number());

export const StatsResponseSchema = z.object({
  total: z.number(),
  countries: CountryStatsSchema,
});
