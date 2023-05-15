// __tests__/TextInput.test.tsx
import { render, screen } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import "@testing-library/jest-dom";
import TextInput from "./index";


describe("TextInput Component", () => {
  it("renders properly", () => {
    const TestComponent = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <TextInput
            name="test"
            label="Test Label"
            control={methods.control}
            errors={methods.formState.errors}
          />
        </FormProvider>
      );
    };
    render(<TestComponent />);

    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
