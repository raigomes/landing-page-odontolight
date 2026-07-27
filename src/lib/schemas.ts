import { z } from "zod";

export const treatments = [
  "Clínico Geral",
  "Estética",
  "Clareamento",
  "Implantes",
] as const;

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  phone: z
    .string()
    .min(10, "Telefone inválido — mínimo 10 dígitos")
    .regex(
      /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
      "Insira um telefone válido, ex: (51) 99999-8888"
    ),
  email: z
    .string()
    .max(200, "E-mail muito longo")
    .optional()
    .or(z.literal("")),
  treatment: z.enum(treatments, {
    message: "Selecione um tratamento",
  }),
  consent: z.boolean().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
