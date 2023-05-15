"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { schema } from "@/schema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import PhoneInput from "@/components/PhoneInput";
import TextInput from "@/components/TextInput";
import jobPositionsOptions from "@/data/jobPositionsOptions";
import SelectInput from "@/components/SelectInput";
import PasswordInput from "@/components/PasswordInput";
import TermsAndConditions from "./TermsAndConditions";

type FormInputs = z.infer<typeof schema>;

const Formulario: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    setFormSubmitted(true);
  };

  const inputClassName =
    "h-10 p-2 border-2 border-black rounded-none shadow-input placeholder:text-slate-400";

  return (
    <div>
      {!formSubmitted ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="formWrapper"
          className="flex flex-col gap-4"
        >
          <TextInput
            name="name"
            label="Diga, qual o seu nome?"
            control={control}
            errors={errors}
            placeholder="Insira seu nome"
          />

          <TextInput
            name="email"
            label="Seu email de trabalho"
            control={control}
            errors={errors}
            placeholder="Insira seu e-mail"
          />

          <PhoneInput
            name="phone"
            label="Seu telefone"
            control={control}
            setValue={setValue}
            errors={errors}
          />

          <SelectInput
            name="jobPosition"
            label="Seu cargo de ocupação"
            control={control}
            errors={errors}
            options={jobPositionsOptions}
          />

          <PasswordInput
            label="Crie uma senha"
            name="password"
            control={control}
            defaultValue=""
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            errors={errors}
          />

          <PasswordInput
            label="Confirme sua senha"
            name="confirmPassword"
            control={control}
            defaultValue=""
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
            errors={errors}
          />

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
            {errors.site && (
              <p className="text-red-500">{errors.site.message}</p>
            )}

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

          <TermsAndConditions />

          <Button type="highlight" size="custom" className="w-full h-11">
            CRIAR MINHA CONTA
          </Button>
        </form>
      ) : (
        <div className="text-green-500 text-center">Obrigado! Entraremos em contato.</div>
      )}
    </div>
  );
};

export default Formulario;
