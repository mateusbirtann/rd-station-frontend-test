import { Controller } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = {
  label: string,
  name: string;
  control: any;
  defaultValue: string;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  errors: any;
};

const PasswordInput = ({
  label,
  name,
  control,
  defaultValue,
  showPassword,
  setShowPassword,
  errors,
}: PasswordInputProps) => {
  const inputClassName =
    "h-10 p-2 border-2 border-black rounded-none shadow-input placeholder:text-slate-400";

  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-base font-nunito">{label}</label>
      <div className="relative">
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
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
          className="absolute inset-y-0 right-0 pr-2"
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      </div>
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default PasswordInput;
