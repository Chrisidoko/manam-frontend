// schema.ts
import { z } from "zod";

export const schemaTickets = z.object({
  title: z.string(),
  event_name: z.string(),
  event_date: z.string(),
  event_location: z.string(),
  space_available: z.string(),
  organizer: z.string(),
  price: z.string(),
  author: z.string(),
  image: z.instanceof(File).optional(),
  created: z.string(),
  status: z.string(),
  description: z.string(),
  priority: z.string(),
  category: z.string(),
  type: z.string(),
  duration: z.string().nullable(),
  policyNumber: z.string(),
  policyType: z.string(),
});

export type Ticket = z.infer<typeof schemaTickets>;

export const statusOptions = ["resolved", "in-progress", "escalated"] as const;
export type Status = (typeof statusOptions)[number];

export const categoryTypes = [
  { name: "Advisory", value: "Advisory" },
  { name: "Tax & Assurance", value: "Tax & Assurance" },
  { name: "Management", value: "Management" },
  { name: "Consultancy", value: "Consultancy" },
  { name: "Training", value: "Training" },
] as const;

export const eventTypes = [
  { name: "Conference", value: "Conference" },
  { name: "Workshop", value: "Workshop" },
] as const;

export type Category = (typeof categoryTypes)[number]["value"];
export type EventTypes = (typeof eventTypes)[number]["value"];

export const ticketTypes = [
  { name: "First Notice of Loss", value: "fnol" },
  { name: "Policy Service", value: "policy" },
  { name: "Claims Status", value: "claims" },
  { name: "Emergency", value: "emergency" },
  { name: "Coverage Review", value: "coverage" },
  { name: "Billing Support", value: "billing" },
] as const;

export const priorities = [
  {
    value: "emergency",
    label: "Emergency",
    sla: "15m",
    description: "Urgent help needed",
  },
  {
    value: "high",
    label: "High Priority",
    sla: "4h",
    description: "Critical issue",
  },
  {
    value: "medium",
    label: "Medium Priority",
    sla: "24h",
    description: "Standard support",
  },
  {
    value: "low",
    label: "Low Priority",
    sla: "48h",
    description: "Minor issue",
  },
];
