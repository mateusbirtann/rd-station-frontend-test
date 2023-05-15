// __tests__/PhoneInput.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import "@testing-library/jest-dom";
import PhoneInput from "./index";

describe("PhoneInput Component", () => {
  it("renders properly", () => {
    const TestComponent = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <PhoneInput
            name="phone"
            label="Phone Number"
            control={methods.control}
            setValue={methods.setValue}
            errors={methods.formState.errors}
          />
        </FormProvider>
      );
    };
    render(<TestComponent />);

    const labelElement = screen.getByText(/Phone Number/i);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("Insira seu telefone");
    expect(inputElement).toBeInTheDocument();
  });

  it("formats the phone number", () => {
    const TestComponent = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <PhoneInput
            name="phone"
            label="Phone Number"
            control={methods.control}
            setValue={methods.setValue}
            errors={methods.formState.errors}
          />
        </FormProvider>
      );
    };
    render(<TestComponent />);

    const inputElement = screen.getByPlaceholderText(
      "Insira seu telefone"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "1234567890" } });
    expect(inputElement.value).toBe("(12) 3456-7890");
  });
});
