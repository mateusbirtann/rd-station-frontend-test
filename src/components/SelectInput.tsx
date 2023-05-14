import { Controller } from "react-hook-form";

type SelectInputProps = {
  name: string;
  label: string;
  control: any;
  errors: any;
  options: { value: string; label: string }[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  control,
  errors,
  options,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-base font-nunito">{label}</label>
      <Controller
        render={({ field }) => (
          <select
            {...field}
            className="h-10 p-2 border-2 border-black rounded-none shadow-input placeholder:text-slate-400"
            placeholder="Selecione o cargo"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
        name={name}
        control={control}
        defaultValue=""
      />
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default SelectInput;
