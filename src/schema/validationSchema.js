import { z } from "zod";

export const schema = z
  .object({
    name: z.string().nonempty({ message: "O campo nome é obrigatório" }),
    email: z.string().email({ message: "Deve ser um email válido" }),
    phone: z.string().nonempty({ message: "O campo telefone é obrigatório" }),
    jobPosition: z.string().nonempty({ message: "O campo cargo é obrigatório" }),
    password: z
      .string()
      .min(6, { message: "Mínimo 6 caracteres" })
      .max(10, { message: "Máximo 10 caracteres" })
      .refine((value) => /[a-z]/.test(value), {
        message: "Deve conter pelo menos uma letra minúscula",
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: "Deve conter pelo menos uma letra maiúscula",
      })
      .refine((value) => /\d/.test(value), {
        message: "Deve conter pelo menos um número",
      }),
    site: z.string(),
    confirmPassword: z.string().nonempty({ message: "O campo confirme sua senha é obrigatório" }),
    hasWebsite: z.enum(["yes", "no"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "A senhas devem ser iguais",
    path: ["confirmPassword"],
  })
  .refine((data) => {
    if (data.hasWebsite === "yes") {
      return data.site !== "";
    }
    return true;
  }, {
    message: "Campo site é obrigatório",
    path: ["site"],
  });