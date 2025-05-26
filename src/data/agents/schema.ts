import { z } from "zod";

export const schemaAgents = z.object({
  agent_id: z.string(),
  full_name: z.string(),
  account: z.string(),
  start_date: z.string(),
  end_date: z.string().nullable(),
  number: z.string(),
  email: z.string(),
  registered: z.boolean(),
  minutes_called: z.number(),
  minutes_booked: z.number(),
  ticket_generation: z.boolean(),
  amount: z.string(),
});

export type Agent = z.infer<typeof schemaAgents>;
