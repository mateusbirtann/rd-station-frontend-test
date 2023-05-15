// __tests__/PasswordInput.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import "@testing-library/jest-dom";
import PasswordInput from './index';

describe('PasswordInput Component', () => {
  it('renders properly', () => {
    const TestComponent = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <PasswordInput
            label="Crie uma senha"
            name="password"
            control={methods.control}
            defaultValue=""
            showPassword={false}
            setShowPassword={() => {}}
            errors={methods.formState.errors}
          />
        </FormProvider>
      );
    };
    render(<TestComponent />);
    
    const labelElement = screen.getByText(/Crie uma senha/i);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('••••••••') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it('toggles password visibility', () => {
    const TestComponent = () => {
      const methods = useForm();
      const [showPassword, setShowPassword] = useState(false);
      return (
        <FormProvider {...methods}>
          <PasswordInput
            label="Crie uma senha"
            name="password"
            control={methods.control}
            defaultValue=""
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            errors={methods.formState.errors}
          />
        </FormProvider>
      );
    };
    render(<TestComponent />);
    
    const inputElement = screen.getByPlaceholderText('••••••••') as HTMLInputElement;
    const toggleButton = screen.getByRole('button');
    
    fireEvent.click(toggleButton);
    expect(inputElement.type).toBe('text');
    
    fireEvent.click(toggleButton);
    expect(inputElement.type).toBe('password');
  });
});
