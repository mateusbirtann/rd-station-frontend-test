// components/PhoneInput.tsx
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import normalizeNumber from "@/services/maskNumber";

type PhoneInputProps = {
  name: string;
  label: string;
  control: any;
  setValue: any;
  errors: any;
};

const PhoneInput: React.FC<PhoneInputProps> = ({
  name,
  label,
  control,
  setValue,
  errors,
}) => {
  const inputClassName =
    "h-10 p-2 border-2 border-black rounded-none shadow-input placeholder:text-slate-400";

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    event.target.value = normalizeNumber(value);
    setValue(name, event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-base font-nunito">{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            className={inputClassName}
            placeholder="Insira seu telefone"
            maxLength={15}
            onChange={handlePhoneChange}
          />
        )}
      />
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default PhoneInput;
