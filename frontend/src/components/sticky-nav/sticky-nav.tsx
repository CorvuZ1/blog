import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Container } from "~/components/container/container";

export interface IStickyNavProps {
  className?: string;
  links: {
    label: string;
    href: string;
  }[];
}

export const StickyNav: FC<IStickyNavProps> = props => {
  const { links, className } = props;

  return (
    <div className={twMerge("fixed bottom-0 w-full", className)}>
      <Container className="flex w-full justify-between" size="xs">
        {links.map((item, index) => (
          <div>{item.label}</div>
        ))}
      </Container>
    </div>
  );
};
