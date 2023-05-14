// components/TextInput.tsx
import { Controller } from "react-hook-form";

type TextInputProps = {
  name: string;
  label: string;
  control: any;
  errors: any;
  placeholder?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  control,
  errors,
  placeholder = "",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold font-nunito">{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            className="h-10 p-2 border-2 border-black rounded-none shadow-input placeholder:text-slate-400"
            placeholder={placeholder}
            autoComplete="off"
          />
        )}
      />
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default TextInput;
