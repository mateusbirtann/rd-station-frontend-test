interface TypographyProps {
  variant: keyof typeof variantMapping;
  children: React.ReactNode;
}

const variantMapping = {
  'heading-lg': 'font-darker-grotesque font-black heading-100 text-mobile-heading-lg sm:text-desktop-heading-lg',
  'heading-md': 'font-darker-grotesque font-black heading-100 text-mobile-heading-md sm:text-desktop-heading-md',
  'heading-sm': 'font-darker-grotesque font-black heading-110 text-mobile-heading-sm sm:text-desktop-heading-sm ',
  'heading-xs': 'font-darker-grotesque font-extra-bold heading-110 text-mobile-heading-xs sm:text-desktop-heading-xs',
  'subtitle-sm': 'font-nunito-sans font-regular subtitle-140 text-mobile-subtitle-sm sm:text-desktop-subtitle-sm',
  'subtitle-xs': 'font-nunito-sans font-regular subtitle-120 text-mobile-subtitle-xs sm:text-desktop-subtitle-xs',
  'body-lg': 'font-nunito-sans font-regular body-150 text-mobile-body-lg sm:text-desktop-body-lg',
  'body-md': 'font-nunito-sans font-regular body-150 text-mobile-body-md sm:text-desktop-body-md',
  'body-sm': 'font-nunito-sans font-regular body-150 text-mobile-body-sm sm:text-desktop-body-sm',
};

const Typography = ({ variant, children }: TypographyProps) => {
  const classNames = variantMapping[variant];

  return (
    <div className={`${classNames} text-gray-dark`}>
      {children}
    </div>
  );
};

export default Typography;
