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

export type FeatureItemProps = {
  text: string;
}

export type BenefitCardProps = {
  icon: string;
  title: string;
  subtitle: string;
}

export type IntegrationItemProps = {
  icon: string;
  text: string;
}