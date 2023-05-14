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

export type NavMenuProps = {
  title: string;
  content?: { subTitle: string; links: { text: string; href: string }[] }[];
}

export type NavMenuTriggerProps = {
  item: NavMenuProps;
  index: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}