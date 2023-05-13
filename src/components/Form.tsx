"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Button from "./Button";

const schema = z
  .object({
    name: z.string().nonempty({ message: "O campo nome é obrigatório" }), // Campo obrigatório
    email: z.string().email({ message: "Deve ser um email válido" }), // Email válido
    phone: z.string().max(11),
    // Telefone com a máscara correta
    jobPosition: z
      .string()
      .nonempty({ message: "O campo cargo é obrigatório" }), // Campo obrigatório
    password: z
      .string()
      .min(6, { message: "Mínimo 6 caracteres" }) // Mínimo 6 caracteres
      .max(10, { message: "Máximo 10 caracteres" }) // Máximo 10 caracteres
      .refine((value) => /[a-z]/.test(value), {
        message: "Deve conter pelo menos uma letra minúscula",
      }) // Pelo menos uma letra minúscula
      .refine((value) => /[A-Z]/.test(value), {
        message: "Deve conter pelo menos uma letra maiúscula",
      }) // Pelo menos uma letra maiúscula
      .refine((value) => /\d/.test(value), {
        message: "Deve conter pelo menos um número",
      }), // Pelo menos um número
    site: z.string().url({ message: "Deve ser uma URL válida" }), // URL válida
    confirmPassword: z
      .string()
      .nonempty({ message: "O campo confirme sua senha é obrigatório" }),
    hasWebsite: z.enum(["yes", "no"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  })
  .refine((data) => (data.hasWebsite ? data.site : true), {
    message: "Campo site é obrigatório",
    path: ["site"], // path of error
  });

type FormInputs = z.infer<typeof schema>;

const Formulario: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function normalizeNumber(value: any) {
    const onlyNumbers = value.replace(/[^\d]/g, "");
    const digitsCount = onlyNumbers.length;
    let formattedNumber = "";

    if (digitsCount <= 2) {
      formattedNumber = onlyNumbers;
    } else if (digitsCount <= 6) {
      formattedNumber = `(${onlyNumbers.substr(0, 2)}) ${onlyNumbers.substr(
        2
      )}`;
    } else if (digitsCount <= 10) {
      formattedNumber = `(${onlyNumbers.substr(0, 2)}) ${onlyNumbers.substr(
        2,
        4
      )}-${onlyNumbers.substr(6)}`;
    } else if (digitsCount <= 11) {
      formattedNumber = `(${onlyNumbers.substr(0, 2)}) ${onlyNumbers.substr(
        2,
        1
      )} ${onlyNumbers.substr(3, 4)}-${onlyNumbers.substr(7)}`;
    } else {
      formattedNumber = onlyNumbers.substr(0, 11);
    }

    return formattedNumber;
  }

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      hasWebsite: "yes",
    },
  });

  const hasWebsite = watch("hasWebsite") === "yes";

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  const inputClassName =
    "h-10 p-2 border-2 border-black rounded-none shadow-input placeholder:text-slate-400";

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="formWrapper"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label className="font-bold font-nunito">
            Diga, qual o seu nome?
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={`${inputClassName}`}
                placeholder="Insira seu nome"
                autoComplete="username"
              />
            )}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-base font-nunito">
            Seu email de trabalho
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={`${inputClassName}`}
                placeholder="Insira seu e-mail"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-base font-nunito">
            Seu telefone
          </label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={`${inputClassName}`}
                placeholder="Insira seu telefone"
                maxLength={15}
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = normalizeNumber(value);
                  setValue("phone", event.target.value);
                }}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-base font-nunito">
            Seu cargo de ocupação
          </label>
          <Controller
            render={({ field }) => (
              <select
                {...field}
                className={`${inputClassName}`}
                placeholder="Selecione o cargo"
              >
                <option value="" disabled hidden>
                  Selecione o cargo
                </option>
                <option value="ceo">Sócio(a) / CEO / Proprietário(a)</option>
                <option value="dir_vendas">Diretor(a) de Vendas</option>
                <option value="dir_marketing">Diretor(a) de Marketing</option>
                <option value="dir_outras">Diretor(a) Outras Áreas</option>
                <option value="ger_marketing">Gerente de Marketing</option>
                <option value="ger_vendas">Gerente de Vendas</option>
                <option value="coord_marketing">
                  Coordenador(a)/Supervisor(a) de Marketing
                </option>
                <option value="coord_vendas">
                  Coordenador(a)/Supervisor(a) de Vendas
                </option>
                <option value="anal_marketing">
                  Analista/Assistente de Marketing
                </option>
                <option value="anal_vendas">
                  Analista/Assistente de Vendas
                </option>
                <option value="vendedor">
                  Vendedor(a) / Executivo(a) de Contas
                </option>
                <option value="estudante">Estudante</option>
                <option value="outros">Outros Cargos</option>
              </select>
            )}
            name="jobPosition"
            control={control}
            defaultValue=""
          />
          {errors.jobPosition && (
            <p className="text-red-500">{errors.jobPosition.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-base font-nunito">
            Crie uma senha
          </label>
          <div className="relative">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  className={`${inputClassName} w-full`}
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
              )}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-2" // posiciona o botão dentro do div
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-base font-nunito">
            Confirme sua senha
          </label>
          <div className="relative">
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type={showConfirmPassword ? "text" : "password"}
                  className={`${inputClassName} w-full`}
                  placeholder="Branding-rd@2021*"
                  autoComplete="new-password"
                />
              )}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-2"
            >
              {showConfirmPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-base font-nunito">
            Qual o site da sua empresa?
          </label>
          <Controller
            name="hasWebsite"
            control={control}
            render={({ field }) => (
              <label className="flex gap-2 items-center">
                <input
                  {...field}
                  type="radio"
                  value="yes"
                  className={`border h-4 w-4 appearance-none rounded-full ${
                    hasWebsite ? "border-4 border-primary-600 bg-black" : ""
                  }`}
                />
                Meu site é
              </label>
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Controller
            name="site"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={`${inputClassName}`}
                placeholder="Insira o endereço do seu site"
                disabled={!hasWebsite}
              />
            )}
          />
          {errors.site && <p className="text-red-500">{errors.site.message}</p>}

          <Controller
            name="hasWebsite"
            control={control}
            render={({ field }) => (
              <label className="flex gap-2 items-center">
                <input
                  {...field}
                  type="radio"
                  value="no"
                  checked={field.value === "no"}
                  className="border border-zinc-500 checked:border-4 checked:border-primary-600 checked:bg-black h-4 w-4 appearance-none rounded-full"
                />
                Ainda não tenho site
              </label>
            )}
          />
        </div>

        <div className="flex flex-col gap-2 px-4">
          <ul className="list-disc text-gray text-xs">
            <li>
              Ao criar minha conta estou de acordo com os termos de uso do
              software e política de privacidade
            </li>
            <li>
              Ao preencher o formulário, concordo em receber comunicações de
              acordo com meus interesses.
            </li>
            <li>
              *Você pode alterar suas permissões de comunicação a qualquer
              tempo.
            </li>
          </ul>
        </div>

        <Button type="highlight" size="custom" className="w-full h-11">
          CRIAR MINHA CONTA
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
