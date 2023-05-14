export type TypographyProps = {
  variant: string;
  className?: string;
};

export type HeroHeaderProps = {
  title: React.ReactElement<TypographyProps>;
  description: string;
};

export type HeroBottomProps = {
  title: string;
  descriptionList: string[];
};
