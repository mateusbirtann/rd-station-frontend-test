import React, { FC, ChangeEvent, useState } from "react";

type InputMaskProps = {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

export const InputMask: FC<InputMaskProps> = ({ name, value, onChange, placeholder, className }) => {
  const [cursorPosition, setCursorPosition] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { selectionStart } = e.target;
    if (selectionStart !== null) setCursorPosition(selectionStart);
    onChange(e);
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{0,1})(\d{0,4})$/);
    if (match) {
      const intlCode = (match[3].length === 1) ? '9 ' : '';
      return ['(', match[1], ') ', match[2], intlCode, match[3], match[4].length ? '-' : '', match[4]].join('');
    }
    return phoneNumber;
  };

  return (
    <input
      type="text"
      name={name}
      value={formatPhoneNumber(value)}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={className}
      onKeyDown={(e: any) => { e.target.selectionEnd = cursorPosition; }}
    />
  );
};
