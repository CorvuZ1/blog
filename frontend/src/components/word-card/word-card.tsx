import { FC } from "react";
import { withAnimation } from "~/lib/hocs/with-animation";

export interface IWorkCardProps {
  className?: string;
  date: string;
  label: string;
  description: string;
  href: string;
  image: string;
  alt?: string;
  id?: number;
  isSimpleVariant?: boolean;
}

const _WorkCard: FC<IWorkCardProps> = props => {
  const { date, description, href, label, className } = props;

  return <div>{label}</div>;
};

export const WorkCard = withAnimation(_WorkCard);
