interface TypographyProps {
  variant: keyof typeof variantMapping;
  className?: string;
  children: React.ReactNode;
}

const variantMapping = {
  'heading-lg': 'font-darker font-black leading-heading-100 text-mobile-heading-lg xl:text-desktop-heading-lg',
  'heading-md': 'font-darker font-black leading-heading-100  text-mobile-heading-md xl:text-desktop-heading-md',
  'heading-sm': 'font-darker font-black leading-heading-110  text-mobile-heading-sm xl:text-desktop-heading-sm ',
  'heading-xs': 'font-darker font-extra-bold leading-heading-110 text-mobile-heading-xs xl:text-desktop-heading-xs',
  'subtitle-sm': 'font-nunito font-regular subtitle-140 text-mobile-subtitle-sm xl:text-desktop-subtitle-sm',
  'subtitle-xs': 'font-nunito font-regular subtitle-120 text-mobile-subtitle-xs xl:text-desktop-subtitle-xs',
  'body-lg': 'font-nunito leading-body-150 text-mobile-body-lg xl:text-desktop-body-lg',
  'body-md': 'font-nunito leading-body-150 font-regular text-mobile-body-md xl:text-desktop-body-md',
  'body-sm': 'font-nunito body-150 text-mobile-body-sm xl:text-desktop-body-sm',
};

const Typography = ({ variant, children, className}: TypographyProps) => {
  const classNames = variantMapping[variant];

  return (
    <div className={`${classNames} text-gray-dark ${className}`}>
      {children}
    </div>
  );
};

export default Typography;
