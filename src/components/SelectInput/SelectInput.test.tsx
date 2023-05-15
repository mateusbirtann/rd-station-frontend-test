// __tests__/SelectInput.test.tsx
import { render, screen } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import "@testing-library/jest-dom";
import SelectInput from "./index";

describe("SelectInput Component", () => {
  it("renders properly", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ];

    const TestComponent = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <SelectInput
            name="select"
            label="Select Option"
            control={methods.control}
            errors={methods.formState.errors}
            options={options}
          />
        </FormProvider>
      );
    };
    render(<TestComponent />);

    const labelElement = screen.getByText(/Select Option/i);
    expect(labelElement).toBeInTheDocument();

    const selectElement = screen.getByPlaceholderText(/Selecione o cargo/i);
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.tagName).toBe("SELECT");

    options.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });
});
